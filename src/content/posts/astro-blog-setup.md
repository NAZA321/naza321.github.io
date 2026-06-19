---
title: "Astro + Markdown でブログを構築"
date: 2026-06-21
description: "このサイトの技術構成について。"
tags: ["astro", "meta"]
categories: ["blog"]
---

このサイトは以下の構成で作られています。

- 静的サイトジェネレーター: [Astro](https://astro.build/)
- 記事: Markdown + Content Collections
- スタイル: Tailwind CSS
- デプロイ: GitHub Actions で `master` へのpush時に自動ビルド・公開

タグやカテゴリーで記事を分類できるようにしています。
