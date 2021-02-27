/** @API Auth API **/

import HttpClient from "../utils/HttpClient";
const client = new HttpClient();

/**
 * Logout user
 * @returns {Promise<AxiosResponse<*>>}
 */
export const getLeaderBoardList = () => client.request('GET', 'list');