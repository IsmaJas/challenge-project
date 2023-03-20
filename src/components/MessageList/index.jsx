import React from 'react';
import { Table } from 'react-bootstrap';

export const MessageList = ({ messages }) => {
  if (!messages.length) {
    return (
      <>
        <p className="text-center">Please write down your message here !</p>
      </>
    );
  }
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
