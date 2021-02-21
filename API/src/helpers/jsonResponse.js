/**
 * @method res
 * @param (res, status, code, data)
 * @returns json
 */

function jsonResponse (res, status, code, data) {
        return res.status(code).json({
            status,
            data
        })
}

module.exports = jsonResponse;