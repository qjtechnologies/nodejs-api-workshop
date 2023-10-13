import time

count = 0;

def myfunction():
  global count
  while(True):
    a = 1+1
    #print("Do some work")
  time.sleep(0.1)
  if(count == 50):
    print("We are at 50")

while(True):
  myfunction()
  count += 1
  
print("This is the end of loop")