const express = require( 'express' );
const bodyParser = require( 'body-parser' );

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all( (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  next();
})

.get( (req, res, next) => {
  res.end('We will sent all promotions to you!')
})

.post( (req, res, next) => {
  res.end('Will add the promotion: ' + req.body.name +
    'With details :' + req.body.description);
})

.put(( req,res,next ) => {
  res.statusCode = 403;
  res.end('PUT operation not support on /promotions');
})

.delete( ( req,res,next ) => {
  res.end('deleting all the promotions!')
})

promoRouter.route('/:promoId')
.all( (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  next();
})

.get( (req, res, next) => {
  res.end('We will sent details of promotions: '+ req.params.promoId + 'to you!')
})


.post( (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not support on /promotions/' + req.params.promoId);
})

.put(( req,res,next ) => {
  res.write('Will update the promotion:' + req.params.promoId)
  res.end('Will update promotion:'+ req.params.promoId + 'with a details'
  + req.body.description );
})

.delete(( req,res,next ) => {
  res.end('deleting the promotion:' + req.params.promoId)
})


module.exports = promoRouter;