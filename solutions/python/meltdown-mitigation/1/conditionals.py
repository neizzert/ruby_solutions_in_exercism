def is_criticality_balanced (temp, neu):
    # revisar el critically
    if temp < 800 and neu > 500 and temp * neu  < 500000:
        return True
    else:
        return  False
        
def reactor_efficiency(voltage, current, theoretical_max_power):
    CalculateVol = voltage * current
    efficiency   = int((CalculateVol / theoretical_max_power) * 100)
    
    if efficiency >= 80:
        return "green" 
    elif efficiency >=60 and efficiency < 80:
        return "orange"
    elif efficiency >=30  and efficiency < 60:
        return "red"
    elif efficiency < 30:
        return "black" 

def fail_safe(temperature, neutrons_produced_per_second, threshold):
    DifferencePorcentage =  10
    MaxPorcentage = (100 + DifferencePorcentage) / 100
    
    if ( (temperature * neutrons_produced_per_second >=0  and temperature * neutrons_produced_per_second <= int(threshold * 10 / 100)) or
         (temperature * neutrons_produced_per_second > int(threshold * 10 / 100) and  temperature * neutrons_produced_per_second < int(threshold * 90 / 100))  
        ):
       return "LOW"
   
    elif temperature * neutrons_produced_per_second >= int(threshold * 90 / 100) and temperature * neutrons_produced_per_second <= MaxPorcentage * threshold :
        return "NORMAL"
    
    else:
        return "DANGER"
