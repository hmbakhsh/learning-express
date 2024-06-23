import { getLinksDB, postLinksDB } from '../models/linksModel.js';
export const getLinks = async (req, res) => {
    res.status(200);
    res.send(await getLinksDB());
};
export const postLinks = async (req, res) => {
    try {
        await postLinksDB(req.body);
        res.sendStatus(200);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
};
//# sourceMappingURL=linksController.js.map