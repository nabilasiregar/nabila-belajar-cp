def checkNumber(number)
  sum = []
 for i in 2..number
    if is_prime(i) == false && is_divisible_by_six(i) == false
      sum << i
      puts i
    end
  end
  result = sum.map(&:to_i).reduce(0, :+)
  result
end

def is_prime(num)
  (2..(num - 1)).each do |n|
    return false if num % n == 0
  end
  true
end

def is_divisible_by_six(num)
  return true if num % 6 == 0
  false
end
