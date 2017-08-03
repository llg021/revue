const issues = [
  {id: 1, issuetype:"Implausible numerical value", column:"Temperature", descript:"Numerical value 982 outside of expected range.", requester: "Requester 1", date: "06/12/2017"},
  {id: 2, issuetype:"Future event", column:"Date of Birth", descript:"Year 2040 outside of expected range.", requester: "Requester 2", date: "06/28/2017"}
];

const comments = [
  {id: 1, author: "Commenter 1", text: "This is one comment", date: "06/12/2017"},
  {id: 2, author: "Commenter 2", text: "This is another comment", date: "07/13/2014"}
];

export default {
	issues: issues,
	comments: comments,
};