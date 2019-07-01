let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const bs58 = require('bs58');

const dappCategories = require('./../constants/dapp-categories').ALL_CATEGORIES;
const metadataStatuses = require('./../constants/dapp-metadata-statuses').ALL_STATUSES;

const IPFSService = require('./../services/ipfs-service');

let DAppsMetadataSchema = new Schema({
    id: Schema.Types.ObjectId,
    details: {
        name: {
            type: String,
            required: true
        },
        uploader: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true,
            enum: dappCategories
        },
        image: {
            type: String,
            required: true
        },
        dateAdded: {
            type: Number,
            required: true
        },
    },
    hash: {
        type: String,
        unique: true,
    },
    compressedMetadata: String,
    status: {
        type: String,
        default: "NEW",
        enum: metadataStatuses
    },
    ipfsHash: String
});

DAppsMetadataSchema.pre('save', async function () {
    const hash = await IPFSService.generateContentHash(this.details);
    this.set({ hash: hash });
});

DAppsMetadataSchema.statics.findByPlainMetadata = async function (metadata) {
    const hash = await IPFSService.generateContentHash(metadata);
    return this.findOne({ hash: hash });
}

DAppsMetadataSchema.statics.findByBytes32Hash = async function (bytes32Hash) {
    const hashHex = `1220${bytes32Hash.slice(2)}`;
    const hashBytes = Buffer.from(hashHex, 'hex');
    const encodedHash = bs58.encode(hashBytes);

    return this.findOne({ hash: encodedHash });
}

module.exports = mongoose.model('DAppsMetadata', DAppsMetadataSchema);
