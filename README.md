# mazboxry Game Portfolio

GitHub Pages でそのまま公開できる、静的なゲームポートフォリオです。Godot 3.6 などで Web エクスポートしたゲームを iframe で埋め込み、一覧ページから「Play」と「Details」へ誘導できます。

## ディレクトリ構成

```text
.
├── index.html              # ゲーム一覧ページ
├── games/                  # 個別ゲーム紹介ページ
│   ├── asteroid-garden.html
│   ├── neon-dungeon.html
│   └── orbit-shepherd.html
├── assets/
│   ├── css/styles.css      # 共通スタイル
│   ├── js/main.js          # タグフィルター用の最小 JS
│   ├── images/             # サムネイル、バナー、スクリーンショット
│   └── playable/           # Godot Web エクスポート配置候補
└── README.md
```

## 新しいゲームを追加する手順

1. `assets/images/` に画像を追加します。
   - サムネイル: 16:9、推奨 `1280x720px` 以上
   - バナー: 16:9、推奨 `1920x1080px` 以上
   - スクリーンショット: 2〜4枚、16:9、推奨 `1280x720px` 以上
   - Web用ボタンやロゴを追加する場合は、背景透過 PNG または SVG 推奨です。
2. `games/your-game.html` を作成します。
   - 既存の `games/*.html` をコピーし、タイトル、説明、タグ、操作方法、技術メモ、画像パスを差し替えてください。
3. `index.html` の `.game-grid` 内にゲームカードを追加します。
   - `data-tags` にフィルター対象のタグを半角スペース区切りで入れます。
   - `Play` ボタンは `games/your-game.html#play`、`Details` ボタンは `games/your-game.html` にします。
4. タグフィルターを増やしたい場合は、`index.html` の `.filters` に `data-filter="TagName"` のボタンを追加します。

## Godot Web エクスポートを配置する場合

例として、Godot から出力した Web ビルドを以下のように配置できます。

```text
assets/playable/your-game/
├── index.html
├── your-game.wasm
├── your-game.pck
└── your-game.js
```

その後、個別ページの iframe を次のように差し替えます。

```html
<iframe title="Your Game" src="../assets/playable/your-game/index.html" loading="lazy" allowfullscreen></iframe>
```

GitHub Pages では大きなファイルも配信できますが、リポジトリ容量が増えやすいため、不要なデバッグファイルや未使用アセットは削除してからコミットしてください。

## ローカル確認

ビルドツールは不要です。ローカルサーバーだけ起動してください。

```bash
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000/` を開きます。iframe や相対パスの確認は、ファイルを直接開くよりローカルサーバー経由が安全です。

## GitHub Pages で公開する手順

1. GitHub の対象リポジトリを開きます。
2. **Settings** → **Pages** を開きます。
3. **Build and deployment** の Source を **Deploy from a branch** にします。
4. Branch を `main`、Folder を `/ (root)` にして保存します。
5. 数分後、表示される GitHub Pages の URL にアクセスします。

## カスタマイズの入口

- 色や余白、カード、ボタンの見た目: `assets/css/styles.css`
- タグフィルターの動作: `assets/js/main.js`
- トップページのカードや注目作品: `index.html`
- 個別ページの説明・技術メモ・iframe: `games/*.html`
