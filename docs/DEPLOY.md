# Publishing on GitHub Pages

This guide puts Golf Stroke Tempo online for free at `https://<your-username>.github.io/golf-stroke-tempo/`, so anyone with the link can open it and add it to their home screen.

Time needed: about 10 minutes the first time. No coding or command line required.

[日本語の手順は下にあります](#日本語)

---

## 1. Create a GitHub account

Skip this if you already have one.

1. Go to <https://github.com/signup> and create a free account.
2. Your username becomes part of the app's address, so pick one you're happy to share.

## 2. Create the repository

1. Click **+** (top right) → **New repository**.
2. **Repository name:** `golf-stroke-tempo`
3. **Description** (optional): `Golf swing and putting tempo trainer`
4. Choose **Public**. GitHub Pages is free only for public repositories.
5. Leave "Add a README" **unchecked** (this folder already has one).
6. Click **Create repository**.

## 3. Upload the files

1. On the new repository page, click **uploading an existing file**.
2. Unzip `golf-stroke-tempo-repo.zip` on your computer.
3. Open the `golf-stroke-tempo` folder, select **everything inside it**, and drag it into the browser window.
   - Include the `icons` and `docs` folders. Dragging folders keeps their structure.
   - `.nojekyll` is a hidden file. On Mac press `Cmd + Shift + .` in Finder to show it; on Windows enable *View → Hidden items*. If it doesn't upload, the site still works.
4. Scroll down, type a message like `First version`, and click **Commit changes**.

Check that the repository's main page shows `index.html`, `manifest.webmanifest`, `sw.js`, and the `icons` and `docs` folders at the top level. If you see a single `golf-stroke-tempo` folder instead, you uploaded the folder itself rather than its contents. Delete it and upload again.

## 4. Turn on GitHub Pages

1. In the repository, go to **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Under **Branch**, choose `main` and `/ (root)`, then click **Save**.
4. Wait about a minute and refresh the page. A box appears saying **"Your site is live at https://&lt;your-username&gt;.github.io/golf-stroke-tempo/"**.

## 5. Finish the README

Open `README.md` and `README.ja.md` on GitHub (click the file, then the pencil icon), replace `<your-username>` with your username, and commit.

Optionally, on the repository's main page click the gear next to **About** and paste your site address into **Website**, so it shows at the top of the repo.

## 6. Install on your phone

- **iPhone:** open the address in **Safari** → Share → **Add to Home Screen**
- **Android:** open the address in **Chrome** → ⋮ → **Install app**

Share the address over LINE or anywhere else. Friends open it and add it the same way.

---

## Publishing updates

1. Edit the file on GitHub (pencil icon), or upload a replacement with **Add file → Upload files**.
2. If you changed an **icon**, also edit `sw.js` and bump `VERSION`, for example `golf-stroke-tempo-v2` → `golf-stroke-tempo-v3`. Page changes don't need this.
3. Commit. GitHub Pages republishes within a minute or two.
4. On phones, open the app with internet and the newest version loads. A phone that had a much older copy may need to open it twice.

## Troubleshooting

| Problem | Fix |
|---|---|
| 404 page at the address | Wait 2 minutes after enabling Pages. Check that `index.html` is at the top level of the repo, not inside a subfolder. |
| Changes don't appear on the phone | Open the app twice with internet. If it still shows the old version, bump `VERSION` in `sw.js` and commit. |
| No "Install app" on Android | Use Chrome, not the LINE in-app browser. In LINE, tap ⋮ → *Open in browser* first. |
| No "Add to Home Screen" on iPhone | Use Safari. Other browsers and in-app browsers on iPhone may hide it. |
| No sound on iPhone | Turn off the silent switch and raise the media volume. |
| Beeps feel late with earbuds | Increase **Bluetooth delay** until the light and the sound line up. |

## Using a custom domain (optional)

If you own a domain, add it under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions. Tick **Enforce HTTPS** once it's available. Offline mode and install require HTTPS.

---

<a id="日本語"></a>

# GitHub Pages で公開する（日本語）

このガイドでは、Golf Stroke Tempo を `https://<ユーザー名>.github.io/golf-stroke-tempo/` に無料で公開します。リンクを知っている人なら誰でも開いて、ホーム画面に追加できます。

所要時間：初回は約10分。プログラミングやコマンド操作は不要です。

## 1. GitHub アカウントを作る

すでにお持ちの場合は飛ばしてください。

1. <https://github.com/signup> から無料アカウントを作成します。
2. ユーザー名はアプリのアドレスの一部になるので、人に教えても問題ない名前にしてください。

## 2. リポジトリを作る

1. 右上の **+** → **New repository** をクリックします。
2. **Repository name**：`golf-stroke-tempo`
3. **Description**（任意）：`Golf swing and putting tempo trainer`
4. **Public** を選びます。GitHub Pages を無料で使えるのは公開リポジトリだけです。
5. 「Add a README」は**チェックしない**でください（README はすでに入っています）。
6. **Create repository** をクリックします。

## 3. ファイルをアップロードする

1. 作成したリポジトリのページで **uploading an existing file** をクリックします。
2. パソコンで `golf-stroke-tempo-repo.zip` を解凍します。
3. `golf-stroke-tempo` フォルダを開き、**中身をすべて**選択して、ブラウザの画面にドラッグします。
   - `icons` と `docs` フォルダも含めてください。フォルダごとドラッグすれば構成がそのまま保たれます。
   - `.nojekyll` は隠しファイルです。Mac は Finder で `Cmd + Shift + .`、Windows は「表示 → 隠しファイル」で表示できます。アップロードできなくてもサイトは動きます。
4. 下にスクロールし、`First version` などのメッセージを入力して **Commit changes** をクリックします。

リポジトリのトップに `index.html`、`manifest.webmanifest`、`sw.js`、`icons` と `docs` フォルダが並んでいれば成功です。`golf-stroke-tempo` フォルダが1つだけ表示されている場合は、中身ではなくフォルダ自体をアップロードしています。削除してやり直してください。

## 4. GitHub Pages を有効にする

1. リポジトリの **Settings** → 左メニューの **Pages** を開きます。
2. **Build and deployment → Source** で **Deploy from a branch** を選びます。
3. **Branch** で `main` と `/ (root)` を選び、**Save** をクリックします。
4. 1分ほど待ってページを再読み込みすると、**「Your site is live at https://&lt;ユーザー名&gt;.github.io/golf-stroke-tempo/」** と表示されます。

## 5. README を仕上げる

GitHub 上で `README.md` と `README.ja.md` を開き（ファイルをクリック → 鉛筆アイコン）、`<your-username>` と `<ユーザー名>` をご自身のユーザー名に置き換えてコミットします。

リポジトリのトップページで **About** の歯車をクリックし、**Website** にサイトのアドレスを貼り付けると、リポジトリの上部にリンクが表示されます（任意）。

## 6. スマホにインストールする

- **iPhone**：**Safari** でアドレスを開く → 共有 → **ホーム画面に追加**
- **Android**：**Chrome** でアドレスを開く → ⋮ → **アプリをインストール**

アドレスは LINE などで共有できます。受け取った人も同じ方法で追加できます。

## 更新するとき

1. GitHub 上でファイルを編集する（鉛筆アイコン）か、**Add file → Upload files** で差し替えます。
2. **アイコン**を変更した場合は、`sw.js` の `VERSION` も上げてください（例：`golf-stroke-tempo-v2` → `golf-stroke-tempo-v3`）。ページの変更だけなら不要です。
3. コミットすると、1〜2分で GitHub Pages に反映されます。
4. スマホでインターネット接続中にアプリを開くと、最新版が読み込まれます。かなり古い版が入っている場合は、2回開いてください。

## うまくいかないとき

| 症状 | 対処 |
|---|---|
| アドレスを開くと 404 になる | Pages を有効にしてから2分ほど待ってください。`index.html` がサブフォルダではなくリポジトリのトップにあるか確認してください。 |
| スマホで変更が反映されない | インターネット接続中にアプリを2回開いてください。それでも古い場合は `sw.js` の `VERSION` を上げてコミットします。 |
| Android で「アプリをインストール」が出ない | LINE 内のブラウザではなく Chrome で開いてください。LINE では ⋮ →「ブラウザで開く」を選びます。 |
| iPhone で「ホーム画面に追加」が出ない | Safari で開いてください。他のブラウザやアプリ内ブラウザでは表示されないことがあります。 |
| iPhone で音が鳴らない | 消音スイッチをオフにし、メディアの音量を上げてください。 |
| イヤホンだと音が遅れる | **音ズレ補正（Bluetooth）** を、ライトと音が合うまで上げてください。 |

## 独自ドメインを使う（任意）

ドメインをお持ちなら、**Settings → Pages → Custom domain** に入力し、GitHub の案内に沿って DNS を設定します。利用可能になったら **Enforce HTTPS** にチェックを入れてください。オフライン機能とインストールには HTTPS が必要です。
