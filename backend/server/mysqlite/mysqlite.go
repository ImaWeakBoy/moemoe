package mysqlite

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

// Kind ...
func Kind(k, s string, p ...interface{}) interface{} {
	switch k {
	case "S":
		return search(s, p...)
	default:
		return dml(s, p...)
	}

}

func dml(s string, p ...interface{}) int64 {
	// fmt.Println(s)
	// fmt.Println(p)
	// var id int64 = 1
	db, err := sql.Open("sqlite3", "../db/moe.db")
	checkErr(err)
	stmt, err := db.Prepare(s)
	checkErr(err)
	res, err := stmt.Exec(p...)
	checkErr(err)
	id, err := res.LastInsertId()
	checkErr(err)
	db.Close()
	return id
}

func search(s string, p ...interface{}) *sql.Rows {
	db, err := sql.Open("sqlite3", "../db/moe.db")
	defer db.Close()
	checkErr(err)
	rows, err := db.Query(s, p...)
	checkErr(err)

	return rows
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
