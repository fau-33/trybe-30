# EX 12

number = 5
counter = 1
result = 1

while counter <= number:
    result = result * counter
    counter += 1
result

# EX 13
# ratings = [6, 8, 5, 9, 10]
# new_ratings = []

# for rating in ratings:
#     new_ratings.append(rating * 10)

# print(new_ratings) 

# ratings = [6, 8, 5, 9, 10]
# new_ratings = [10 * rating for rating in ratings]
# print(new_ratings)

# EX 13
 
ratings = [6, 8, 5, 9, 10]

for rating in ratings:
    if (rating % 3) == 0:
        print(f'{rating} é múltiplo de 3')