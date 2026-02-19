/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
export function createScoreBoard() {
   return {"The Best Ever":1000000}
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
export function addPlayer(scoreBoard, name, score) {
   scoreBoard[name] = score 
    return scoreBoard
}


export function removePlayer(obj, player) {
   delete obj[player]
     return obj
}

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
export function updateScore(obj, player, points) {
   obj[player] +=points
    return obj
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
export function applyMondayBonus(obj) {
        for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            obj[key]+=100
        }
    }
    return obj
}

/**
 * Normalizes a score with the provided normalization function.
 *
 * @param {Params} params the parameters for performing the normalization
 * @returns {number} normalized score
 */
export function normalizeScore(params) {
    let getScore = params["score"]
    let getFunctionOfObject = params["normalizeFunction"]
    let re = getFunctionOfObject(getScore)
    return re
}
