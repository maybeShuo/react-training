const NM_API = "/api";

export default class ServiceClient
{
    static _instance = null;

    constructor () {

    }

    static getInstance()
    {
        if (ServiceClient._instance === null)
        {
            ServiceClient._instance = new ServiceClient();
        }
        return ServiceClient._instance;
    }

    async getUserPlayLists(uid)
    {
        let res = null;
        try {
            res = await $.ajax({
                url: `${NM_API}/user/playlist`,
                type: "GET",
                data: {
                    uid,
                    limit: 1000,
                    offset: 0
                }
            });
        } catch (e) {
            throw(e);
        }

        if (res.code === 200)
        {
            return res.playlist;
        }
        else
        {
            return res;
        }

    }

    async getPlayListDetail(id)
    {
        let res = null;
        try {
            res = await $.ajax({
                url: `${NM_API}/playlist/detail`,
                type: "GET",
                data: {
                    id
                }
            });
        } catch (e) {
            throw(e);
        }

        if (res.code === 200)
        {
            return res.result;
        }
        else
        {
            return res;
        }

    }
}
