import { post, get } from "superagent";

const api = `https://chhukejl.api.lncld.net/1.1/classes/Selling`

export async function sendAd(payload) {
    const result = await post(api).send(payload).set(
        {
            "X-LC-Id": "cHhukEJlIbYo6kpuSW3VoCbj-gzGzoHsz",
            "X-LC-Key": "DJtsnScbqXwDVXubyq3dLQ8y"
        }
    )
    console.info(result)
}

export async function getAds({targetSeller}) {
    const {body} = await get(api).set(
        {
            "X-LC-Id": "cHhukEJlIbYo6kpuSW3VoCbj-gzGzoHsz",
            "X-LC-Key": "DJtsnScbqXwDVXubyq3dLQ8y"
        })
        var {results} = body
        if (targetSeller) {
            results = results.filter(({seller}) => targetSeller === seller)
        }
    return results
}