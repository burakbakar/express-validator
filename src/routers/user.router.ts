import express from 'express'
import * as testController from '../controllers/express.controller'
import { body, validationResult }  from 'express-validator';

const router = express.Router();

router.get('/test',testController.deneme)

console.time("Result Time: ");

router.post('/test',[
    // name must be a string
    body('name').isString().isLength({min:3,max:25}),
    // lastname must be a string
    body('lastname').isString().isUppercase(),
    // fathersname must be a string
    body('fathersname').isString().isLength({min:3,max:25}),
    // mothersname must be a string
    body('mothersname').isString().isLength({min:3,max:25}),
    // email must be a email
    body('email').isEmail(),
    // username must be everythink but min:3-max:15
    body('username').isLength({min:3,max:15}),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }),
    // age must be a numeric type
    body('age').isNumeric(),
    // city must be a string
    body('city').isString(),
    // country must be a string
    body('country').isString(),
    // birthday must be a full date
    body('birthday').isDate(),
    // identification must be a length but its neccesary min 11 char.
    body('identification').isLength({min:11}),
    // telephone must be a tr-TR mobile phone
    body('telephone').isMobilePhone("tr-TR"),
    // domain must bu a URL
    body('domain').isURL(),
    // mac must be an MAC Adress
    body('mac').isMACAddress(),
    // firstDate must be a date
    body('firstDate').isAfter('2020.01.10'),
    // lastDate must be a date
    body('lastDate').isBefore('2020.10.10'),    
    // profession must be a 'engineer'
    body('profession').contains('engineer'),
    //salary must be a $+salary
    body('salary').isCurrency()


  ],testController.postDeneme)
 
  console.timeEnd("Result Time: ");


export default router;