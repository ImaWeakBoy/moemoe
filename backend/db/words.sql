create table words (
    kind         integer                                , -- 類別 1-鏡架 2-鏡片 3-地名 4-郵遞區號
    word_id      integer                                , -- 序
    --
    word_name    varchar(255)                  not null , -- 詞庫描述
    --
    crea_date    datetime                               , -- 建檔日期
    edit_date    datetime                               , -- 最後修改日期
    primary key (kind, word_id)
)
