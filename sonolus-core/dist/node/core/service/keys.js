"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSignaturePublicKey = void 0;
const node_crypto_1 = require("node:crypto");
const keys_1 = require("../../../common/core/service/keys");
let signaturePublicKey;
const getSignaturePublicKey = async () => {
    signaturePublicKey ??= await node_crypto_1.webcrypto.subtle.importKey('jwk', keys_1.signaturePublicKeyJWK, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['verify']);
    return signaturePublicKey;
};
exports.getSignaturePublicKey = getSignaturePublicKey;
