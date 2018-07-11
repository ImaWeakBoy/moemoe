create table orderMaster (
    sheet_id   integer  primary key autoincrement   , -- 筆數編號
    --
    sheet_no   varchar(20)                not null  , -- 單據號碼
    sheet_date datetime                   not null  , -- 下單日期
    cust_id    integer                    not null  , -- 客戶編號
    total_amt  integer                              , -- 總金額
    -- far right
    f_r_ball   varchar(10)                          , -- 球面
    f_r_astigmatism varchar(10)                     , -- 散光
    f_r_angle  varchar(10)                          , -- 角度
    f_r_add    varchar(10)                          , -- ADD
    f_r_hv     varchar(10)                          , -- H:/V:mm
    f_r_bf     varchar(10)                          , -- 矯正前/後
    -- far left
    f_l_ball   varchar(10)                          , -- 球面
    f_l_astigmatism varchar(10)                     , -- 散光
    f_l_angle  varchar(10)                          , -- 角度
    f_l_add    varchar(10)                          , -- ADD
    f_l_hv     varchar(10)                          , -- H:/V:mm
    f_l_bf     varchar(10)                          , -- 矯正前/後
    -- near right
    n_r_ball   varchar(10)                          , -- 球面
    n_r_astigmatism varchar(10)                     , -- 散光
    n_r_angle  varchar(10)                          , -- 角度
    n_r_add    varchar(10)                          , -- ADD
    n_r_hv     varchar(10)                          , -- H:/V:mm
    n_r_bf     varchar(10)                          , -- 矯正前/後
    -- near left
    n_l_ball   varchar(10)                          , -- 球面
    n_l_astigmatism varchar(10)                     , -- 散光
    n_l_angle  varchar(10)                          , -- 角度
    n_l_add    varchar(10)                          , -- ADD
    n_l_hv     varchar(10)                          , -- H:/V:mm
    n_l_bf     varchar(10)                          , -- 矯正前/後
    --
    crea_date  datetime                             , -- 第一次產生資料時間
    edit_date  datetime                               -- 最後一次修改資料時間
)