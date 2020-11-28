const express = require( 'express' );
const bodyParser = require( 'body-parser' );

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all( (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  next();
})

.get( (req, res, next) => {
  res.end('We will sent all leaders to you!')
})

.post( (req, res, next) => {
  res.end('Will add the leaders: ' + req.body.name +
    'With details :' + req.body.description);
})

.put(( req,res,next ) => {
  res.statusCode = 403;
  res.end('PUT operation not support on /leaders');
})

.delete( ( req,res,next ) => {
  res.end('deleting all the leaders!')
})

leaderRouter.route('/:leaderId')
.all( (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  next();
})

.get( (req, res, next) => {
  res.end('We will sent details of leaderId: '+ req.params.leaderId + 'to you!')
})


.post( (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not support on /leaders/' + req.params.leaderId);
})

.put(( req,res,next ) => {
  res.write('Will update the leader :' + req.params.leaderId)
  res.end('Will update leader :'+ req.params.leaderId + 'with a details'
  + req.body.description );
})

.delete(( req,res,next ) => {
  res.end('deleting the leader:' + req.params.leaderId)
})


module.exports = leaderRouter;