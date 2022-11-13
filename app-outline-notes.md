# default state

## general style
max-size = 600 x 1160 DONE
font-family = symthe DONE

## header
- bg-image-size = 600 x 167 DONE
- header-title = f-s=39px DONE
- header-subtitle = f-s=23px DONE

## item DONE
- item-div = 500 x 140
- item-title = f-s=28px | f-w=400  | l-h=17px | color: #000000;
- item-description = f-s=16px | f-w=400 | l-h=17px | color: #000000;
- item-price = f-s=20px | f-w=400 | l-h=24px | color: #000000;
- border-bottom = 1px solid #D2D2D2;

## add button DONE
add button = 50x50 | border-radius = 50% | border: 1.5px solid | #DEDEDE;
look for add symnbol on font awesome


## extra notes DONE
container for main = w=500px


# pre-checkout state
- div/section-size = 508 x 319

## checkout-section
- item-name = f-s=20px | f-w=400 | l-h=17px | color: #000000;
- item-price = f-s=20px | l-h=24px | color: #000000;
- complete-order-btn = 508 x 60 | bgc: #16DB99; bshad: 0px 1px 2px rgba(0, 0, 0, 0.05)border-radius: 3px;
- remove-order-text = f-s=12px | color: #BBBBBB;

## extra notes 
no padding inside
flex space between


# modal-payment
- size = 524 x 542 | padding = 47 25 28 25 | 
- modal-title = f-s=24px | f-w=700 | l-h=31px | color: #000000;
- input-height = 71px | br=4px | border: 1.30px solid #757575; | padding= 15 26
- placeholder = f-s=20px | l-h= 31px | 
- pay-button = height = 71px |  br=4px | color: #16DB99 | 

## extra notes 
position fixed on center
hidden by default
input required before pay button is enabled



# order-complete
render text on menu section and also the name inputted of the user
font-size: 32px;
line-height: 17px;
color: #065F46;



# program logic
- render the menu option = pre-order and order complete
- pressing the add button calls the render and update the menu section
- on render function i should have an array for orders
- total price just add the price of the item from the object
- removing the price remove the item from the array and deduct to the total price
- cant checkout if there is no ordered item

