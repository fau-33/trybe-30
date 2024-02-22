with open("arquivo.txt", "w") as file:
    print(file.closed)
print(file.closed)

file.write("Maria 45\n")
file.write("Miguel 33\n")

print("Túlio", file=file)


# LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
#     file.writelines(LINES)
