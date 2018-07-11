create table orderDetail (
    sheet_id   integer                              , -- 筆數編號
    seq_no     integer                              , --
    --
    frame      varchar(255)                         , -- 鏡架名稱
    frame_amt  varchar(10)                          , -- 鏡架金額
    glass      varchar(255)                         , -- 鏡片名稱
    glass_amt  varchar(10)                          , -- 鏡片金額
    --
    tot_amt    varchar(10)                          , -- 小計 (鏡架+鏡片金額)
    --
    crea_date  datetime                             , -- 第一次產生資料時間
    edit_date  datetime                             , -- 最後一次修改資料時間
    primary key (sheet_id, seq_no)
)