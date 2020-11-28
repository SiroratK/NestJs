const express = require( 'express' );
const bodyParser = require( 'body-parser' );

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all( (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  next();
})

.get( (req, res, next) => {
  res.end('We will sent all dishes to you!')
})

.post( (req, res, next) => {
  res.end('Will add the dishes: ' + req.body.name +
    'With details :' + req.body.description);
})

.put(( req,res,next ) => {
  res.statusCode = 403;
  res.end('PUT operation not support on /dishes');
})

.delete( ( req,res,next ) => {
  res.end('deleting all the dishes!')
})


dishRouter.route('/:dishId')
.all( (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  next();
})

.get( (req, res, next) => {
  res.end('We will sent details of dish: '+ req.params.dishId + 'to you!')
})


.post( (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not support on /dishes/' + req.params.dishId);
})

.put(( req,res,next ) => {
  res.write('Will update the dish:' + req.params.dishId)
  res.end('Will update dish:'+ req.params.dishId + 'with a details'
  + req.body.description );
})

.delete(( req,res,next ) => {
  res.end('deleting the dish ' + req.params.dishId)
})

module.exports = dishRouter;