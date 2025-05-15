"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SonolusRedirectShare = void 0;
const express_1 = require("express");
const itemTypes = [
    'posts',
    'playlists',
    'levels',
    'skins',
    'backgrounds',
    'effects',
    'particles',
    'engines',
    'replays',
    'rooms',
];
class SonolusRedirectShare {
    constructor(root) {
        this.router = (0, express_1.Router)();
        this.router.get('', (req, res) => {
            res.redirect(`https://open.sonolus.com/${root}`);
        });
        for (const path of itemTypes) {
            this.router.get(`/${path}/info`, (req, res) => {
                res.redirect(`https://open.sonolus.com/${root}/${path}/info`);
            });
            this.router.get(`/${path}/list`, (req, res) => {
                res.redirect(`https://open.sonolus.com/${root}/${path}/list${getSearch(req.query)}`);
            });
            this.router.get(`/${path}/:name`, (req, res) => {
                res.redirect(`https://open.sonolus.com/${root}/${path}/${req.params.name}`);
            });
        }
    }
}
exports.SonolusRedirectShare = SonolusRedirectShare;
const getSearch = (query) => {
    const params = new URLSearchParams();
    for (const key in query) {
        params.append(key, `${query[key]}`);
    }
    const queryString = params.toString();
    return queryString && `?${queryString}`;
};
