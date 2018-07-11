create table customers (
    cust_id      integer    primary key    autoincrement    , -- 客戶編號
    --
    cust_name    text                           not null    , -- 客戶名稱
    --
    phone_home   varchar(20)                                , -- 電話(宅)
    phone_co     varchar(20)                                , -- 電話(公)
    --
    fax          varchar(20)                                , -- 傳真
    --
    mobile       text                                       , -- 行動電話 (多筆以 ';' 分隔 )
    --
    birth_day    date                                       , -- 生日
    gender       varchar(10)                                , -- 性別
    zipcode      varchar(10)                                , -- 郵遞區號
    addr         text                                       , -- 地址
    remark       text                                       , -- 備註說明
    --
    order_count  integer                                    , -- 下單次數
    order_amt    integer                                    , -- 下單總金額
    order_date   datetime                                   , -- 最後下單日期
    --
    crea_date    datetime                                   , -- 建檔日期
    edit_date    datetime                                     -- 最後修改日期
)