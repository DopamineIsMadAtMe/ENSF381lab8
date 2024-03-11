/* 
2 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
3 Name : lab8_exe_C
4 Assignment : Lab 8 , Exercise C
5 Author ( s ) : Wade Banman, Abdul Shakoor Raed
6 Submission : March 11, 2024
7 Description : React .
8 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
*/
import React from "react";

const styles = {
  container: {
    padding: "10px 1vw",
  },
  table: {
    marginLeft: "2vw",
    width: "100px",
    borderCollapse: "collapse",
  },
  th: {
    borderBottom: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  },
  td: {
    borderBottom: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h2>Welcome to Our Project</h2>
      <p>
        This project is designed to showcase our abilities to work with React,
        including state management, routing, and interacting with an API.
      </p>

      <h3>Creators: Wade Banman and Abdul Shakoor Raed</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>Wade</td>
            <td style={styles.td}>Developer</td>
          </tr>
          <tr>
            <td style={styles.td}>Abdul Shakoor</td>
            <td style={styles.td}>Designer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
