import path from 'path';
import { Server } from 'http';
import Express from 'express';

import request from 'request-promise';
import cheerio from 'cheerio';
import _ from 'lodash';

const app = new Express();
const server = new Server(app);

app.use(Express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    return res.render('index');
});

const getDataFromBody = (body, productUrl) => {
    const $ = cheerio.load(body);

    const sellerDetail = $('.seller-details');
    const styleRatingTotal = $('.ratingBarTotal .product-card__rating__stars div:nth-child(2)').attr('style');
    const ratingTotal = (styleRatingTotal) ? parseInt(styleRatingTotal.match(/\d+/)[0]) * 5 / 100 : null;

    try {
        return {
            url: productUrl,
            basicInfo: {
                cover: $('#productImageBox > .productImage').attr('data-big'),
                title: $('#prod_title').text(),
                price: $('#product-price-box .prod_pricebox_price').html()
            },
            rating: ratingTotal,
            reviews: _.map($('#js_reviews_list .ratRev_reviewListRow'), (elem) => {
                const styleReview = $(elem).find('.product-card__rating__stars div:nth-child(2)').attr('style');
                return {
                    title: $(elem).find('.ratRev_revTitle').text(),
                    date: $(elem).find('.ratRev_revDate').text(),
                    author: $(elem).find('.ratRev-revNickname').text(),
                    detail: $(elem).find('.ratRev_revDetail').text(),
                    rating: parseInt(styleReview.match(/\d+/)[0]) * 5 / 100
                }
            }),
            highlight: {
                warranty: `${$('.prod-warranty__term').text()} ${$('.prod-warranty__type').text()}`,
                details: $('.prod_details').html()
            },
            seller: {
                name: sellerDetail.find('.basic-info__name').text(),
                url: sellerDetail.find('.basic-info__name').attr('href'),
                rating: sellerDetail.find('.seller-rating').attr('data-tooltip-header'),
                size: sellerDetail.find('.seller-size__content .seller-size-icon').attr('data-level'),
                timeOn: sellerDetail.find('.time-on-lazada .time-on-lazada__value').text(),
                timeOnUnitTime: sellerDetail.find('.time-on-lazada .time-on-lazada__unit').text(),
            },
            variant: {
                colors: _.map($('.prd-colorList li.ui-listItem .item_color img'), (elem) => {
                    return $(elem).attr('src');
                })
            },
            specification: {
                include: $('.product-description__inbox .inbox__wrap').text(),
                info: `<table>${$('.specification-table').html()}</table>`
            }
        }
    }
    catch (error) {
        console.log("Error is ", error);

        throw new Error('Something went wrong when parsing the body');
    }
}

app.get('/api/consider-products', (req, res) => {
    const product1 = req.query.product1;
    const product2 = req.query.product2;
    const considerData = {
        product1: null,
        product2: null,
    }

    request({
        uri: product1
    }).then(body => {
        considerData.product1 = getDataFromBody(body, product1);
        return request({ uri: product2 })

    }, () => {
        res.status(500);
        res.send(JSON.stringify({ error: "Something went wrong! Please check phone product urls and try again." }));

    }).then(body => {
        considerData.product2 = getDataFromBody(body, product2);

        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(considerData));

    }, () => {
        res.status(500);
        res.send(JSON.stringify({ error: "Something went wrong! Please check phone product urls and try again." }));

    });
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.info(`Server running on http://localhost:${port} [${env}]`);
});