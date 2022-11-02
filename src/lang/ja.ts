const text = {
  home: {
    description: [
      'このサイトは自宅でダーツ練習をするときのゲームを作っていこうという目的で作成されています。',
      'ゲームはYouTubeなどを参考にして作成しています。',
      'また、このサイトは基本的にクライアント側で処理されているため、端末間での結果の同期などはできません。',
      '結果のインポート・エクスポートで対応するか、TwitterなどSNSへの投稿で管理するかなどしてください。',
      '(こんなわけわからんサイトにログインとか嫌でしょ？)',
    ],
    respect: [
      'このサイトはYouTubeの動画などのあらゆるダーツコンテンツに感謝し、その全てを尊重します。',
    ],
  },
  navigation: {
    n01: '有名なダーツゲーム [WIP]',
    eagleseye: 'BULLだけカウントアップ',
    cricketmarkup: '菊地山口によるダーツ練習ゲーム',
  },
  eagleseye: {
    description: ['BULLだけが加点されるカウントアップです。', 'BULLはセパレートです。'],
  },
  cricketmarkup: {
    description: [
      'このゲームは菊地山口によって紹介されたゲームです。',
      'ゲームのルールは以下の通りです。',
    ],
    rulestep: [
      '目標の回数を設定します（推奨10回）',
      '20から15、BULLまでのクリケットナンバーを目標の回数狙っていきます。',
    ],
    rulemore: '詳しくは動画をご覧ください。',
  },
  import: {
    errortitle: '無効なファイルです。',
    errordescription: 'ファイル形式が無効です。ファイルを確認してください。',
    description: '上書きか追加かを選択してください。上書きを選択すると、元に戻せません。',
  },
  warning: {
    newgame: '新しいゲームを始めると、現在のスコアは破棄されます。',
    deletehistory: '履歴を削除すると、元に戻せません。',
  },
  common: {
    add: '追加',
    overwrite: '上書き',
  },
}

export default text
