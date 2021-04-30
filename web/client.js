const { NoteFindRequest } = require('../proto/notes_pb.js')
const { NoteServiceClient } = require('../proto/notes_grpc_web_pb.js')

const client = new NoteServiceClient('http://71baf782be78.ngrok.io')
const request = new NoteFindRequest()
request.setId('2')

client.find(request, (err, { note }) => {
  if (err) return document.querySelector('#noteFind').innerHTML = err.details
  return document.querySelector('#noteFind').innerHTML = note
})

client.list(null, (err, { notes }) => {
  if (err) return document.querySelector('#noteList').innerHTML = err.details
  return document.querySelector('#noteList').innerHTML = notes
})
