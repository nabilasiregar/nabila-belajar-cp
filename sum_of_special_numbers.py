def checkNumber(number):
  numbers = []
  for i in range(2, int(number)+1):
    if is_prime(i) == False and is_divisible_by_six(i) == False:
      numbers.append(i)
  result = sum(numbers)
  return(result)

def is_prime(num):
  for n in range(2, int(num**1/2)+1):
    if num % n == 0:
      return False 
  return True


def is_divisible_by_six(num):
  if num % 6 == 0: 
    return True
  return False

print checkNumber(12)
