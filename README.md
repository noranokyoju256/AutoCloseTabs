# AutoCloseTabs
* 特定のサイトを開いたときに強制的にタブを閉じるChrome拡張
* デフォルトでは YoutubeとTwitterを午後6~9時以外の時間に見れないようになっています

# インストール方法
* Releaseからダウンロードしたファイルを解凍する
* Chromeで "chrome://extensions/" を開き右上のデベロッパーモードをONにする
* パッケージ化されていない拡張機能を読み込むから、先ほど解凍したファイルを選択
* YoutubeまたはTwitterを開いてタブが閉じることを確認

# 設定方法
* config.jsonを開く
* "patterns" に見れないようにしたいサイトのurlを追加する
* "periods" に機能を無効化する（サイトを見れるようにする）時間帯を追加する
* 変更を保存したら "chrome://extensions/" から拡張機能を更新する
