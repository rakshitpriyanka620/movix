def calculate_total_energy(initial_energy, rate, time):
    total_energy = initial_energy + (rate * (time - 1))
    return total_energy

# Taking input
initial_energy = int(input())
rate = int(input())
timeN = int(input())

# Calculating total energy
result = calculate_total_energy(initial_energy, rate, timeN)

# Printing the result
print(result)
