import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";

const data = [
  { id: 1, name: "Прохорчук Єлизавета", rank: "КМСУ", time: "9:05", status: "очікує" },
  { id: 2, name: "Вдовиченко Руслан", rank: "КМСУ", time: "9:08", status: "очікує" },
  { id: 3, name: "Шеліховська Катерина", rank: "I", time: "9:10", status: "очікує" },
  { id: 4, name: "Вовчук Максим", rank: "I", time: "9:13", status: "очікує" },
  { id: 5, name: "Дзюба Олександра", rank: "I", time: "9:17", status: "очікує" },
  { id: 6, name: "Шкури Ростислав", rank: "I", time: "9:21", status: "очікує" },
  { id: 7, name: "Левченко Дарина", rank: "I", time: "9:25", status: "очікує" },
  { id: 8, name: "Чуба Владислав", rank: "I", time: "9:26", status: "очікує" },
  { id: 9, name: "Яблоновська Марія", rank: "I", time: "9:30", status: "очікує" },
  { id: 10, name: "Семенов Олександр", rank: "I", time: "9:32", status: "очікує" },
  { id: 11, name: "Дубчак Діана", rank: "I", time: "9:35", status: "очікує" },
  { id: 12, name: "Мухомел Юрій", rank: "I", time: "9:38", status: "очікує" },
  { id: 13, name: "Поберезна Аліна", rank: "I", time: "9:42", status: "очікує" },
  { id: 14, name: "Катошин Михайло", rank: "I", time: "9:45", status: "очікує" },
  { id: 15, name: "Вітковська Олександра", rank: "I", time: "9:50", status: "очікує" },
  { id: 16, name: "Мотрій Владислав", rank: "I", time: "9:52", status: "очікує" },
  { id: 17, name: "Мельничук Вероніка", rank: "I", time: "9:55", status: "очікує" },
  { id: 18, name: "Лелях Артем", rank: "II", time: "10:00", status: "очікує" },
  { id: 19, name: "Менделевич Каміла", rank: "II", time: "10:05", status: "очікує" },
  { id: 20, name: "Рабчук Олександр", rank: "II", time: "10:10", status: "очікує" },
  { id: 21, name: "Лісова Анастасія", rank: "II", time: "10:15", status: "очікує" },
  { id: 22, name: "Бернада Єгор", rank: "II", time: "10:20", status: "очікує" },
  { id: 23, name: "Фурдай Андрій", rank: "II", time: "10:30", status: "очікує" },
  { id: 24, name: "Манжай Анна", rank: "I юн", time: "10:35", status: "очікує" },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "bold",
}));

export default function ScheduleTable() {
    const [rows, setRows] = useState(data);

    const handleStatusChange = (id: number, newStatus: string) => {
      const updatedRows = rows.map((row) =>
        row.id === id ? { ...row, status: newStatus } : row
      );
      setRows(updatedRows);
    };
  
    const getRowColor = (status: string) => {
      switch (status) {
        case "визвати на старт":
          return "#FFA500"; // помаранчевий
        case "готується до старту":
          return "#FFD700"; // жовтий
        case "стартував":
          return "#32CD32"; // зелений
        case "не прийшов":
          return "#808080"; // сірий
        default:
          return "white"; // білий
      }
    };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: "#B8E2F2" }}>
            <StyledTableCell>№ п/п</StyledTableCell>
            <StyledTableCell>Прізвище, ім'я</StyledTableCell>
            <StyledTableCell>Розряд</StyledTableCell>
            <StyledTableCell>Старт</StyledTableCell>
            <StyledTableCell>Статус</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row) => (
            <TableRow
              key={row.id}
              style={{ backgroundColor: getRowColor(row.status) }}
            >
              <StyledTableCell>{row.id}</StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.rank}</StyledTableCell>
              <StyledTableCell>{row.time}</StyledTableCell>
              <StyledTableCell>
                <FormControl fullWidth>
                  <InputLabel>Статус</InputLabel>
                  <Select
                    value={row.status}
                    onChange={(e) => handleStatusChange(row.id, e.target.value)}
                    label="Статус"
                  >
                    <MenuItem value="очікує">Очікує</MenuItem>
                    <MenuItem value="визвати на старт">Визвати на старт</MenuItem>
                    <MenuItem value="готується до старту">Готується до старту</MenuItem>
                    <MenuItem value="стартував">Стартував</MenuItem>
                    <MenuItem value="не прийшов">Не прийшов</MenuItem>
                  </Select>
                </FormControl>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
