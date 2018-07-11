package main

import (
	"database/sql"
	"fmt"
	"time"

	"./mysqlite"
)

func main() {
	// query string
	// qStr := "insert into words (kind, word_id, word_name, crea_date, edit_date) values (?,?,?,?,?)"
	qStr := "select * from words where kind = ?"
	// query condition
	// cWhere := []interface{}{2, 4, "johnny", time.Now(), time.Now()}
	cWhere := []interface{}{2}
	// type I insert, D delete, U update, S search
	oKind := "S"
	rows := mysqlite.Kind(oKind, qStr, cWhere...).(*sql.Rows)
	for rows.Next() {
		var kind int
		var wordID int
		var wordName string
		var creaDate time.Time
		var editDate time.Time
		err := rows.Scan(&kind, &wordID, &wordName, &creaDate, &editDate)
		checkErr(err)
		fmt.Println(kind)
		fmt.Println(wordID)
		fmt.Println(wordName)
		fmt.Println(creaDate)
		fmt.Println(editDate)
	}
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
