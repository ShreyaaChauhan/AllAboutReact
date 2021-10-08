import React from "react";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Toaday at 5PM"
          comment="Nice post"
          imgSrc={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Toaday at 2PM"
          comment="I really liked it"
          imgSrc={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="jake"
          timeAgo="Toaday at 1PM"
          comment="I loved it !"
          imgSrc={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Paul"
          timeAgo="Yesterday at 5PM"
          comment="How cool is that"
          imgSrc={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
