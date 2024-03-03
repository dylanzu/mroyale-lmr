const ASSETS_URL = "https://raw.githubusercontent.com/mroyale/assets/legacy/";
const ASSETS_SKIN_URL = "https://raw.githubusercontent.com/mroyale/assets/legacy/img/skins/smb_skin";
const ASSETS_LOBBY_URL = "https://raw.githubusercontent.com/dylanzu/mroyale-lmr/main/";

let LOBBY_MUSIC_URL = ASSETS_LOBBY_URL + "audio/music/lobby" + Math.floor(Math.random() * 8) + ".mp3";
let MENU_MUSIC_URL = ASSETS_URL + "audio/music/menu.mp3";

let SKIN_MUSIC_URL = {};
let SKIN_SFX_URL = {};

let TILE_ANIMATION = {};
let OBJ_ANIMATION = {};
let BLOCK_DATA = {};

let SKINCOUNT = 2;
let assetData = resources[`${ASSETS_URL}assets/assets.json`];

let WEBSOCKET_SERVER = `${ window.location.protocol == "https:" ? "wss" : "ws" }://` + window.location.host + (location.pathname.includes("dev") ? ':9001' : `:9000`);
let DISCLAIMER_SCREEN_TIMEOUT = 2000;

(function() {
    for(i in assetData.properties) {
        var prop = assetData.properties;
        var music = prop[i].music;
        var sfx = prop[i].sfx;
        if (music != undefined) {
            SKIN_MUSIC_URL[prop[i].id] = music;
        }
        if (sfx != undefined) {
            SKIN_SFX_URL[prop[i].id] = sfx;
        }
    }
    if (assetData.tileAnim) {
        for (var anim of assetData.tileAnim) {
            var obj = {};
            obj.tiles = anim.tiles;
            obj.delay = anim.delay;
            obj.tilesets = anim.tilesets || [];
            TILE_ANIMATION[anim.startTile] = obj;
        }
    }
    if (assetData.objAnim) {
        for (var anim of assetData.objAnim) {
            var obj = {};
            obj.tiles = anim.tiles;
            obj.delay = anim.delay;
            obj.tilesets = anim.tilesets || [];
            OBJ_ANIMATION[anim.startTile] = obj;
        }
    }
    if (assetData.tileData) {
        for (var td of assetData.tileData) {
            var obj = {}
            obj.id = td.id;
            obj.name = td.name
            obj.tileData = td.tileData;
            obj.flipData = td.flipData;
            BLOCK_DATA[obj.id] = obj;
        }
    }
})();
console.log("Lobby Music Randomizer mod is active");
