import Api from "./Api";

class MusicApi {
  getAllSongs() {
    return Api.get("/music");
  }
}
export default new MusicApi();
