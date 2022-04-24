# Iptables 
> Docs on iptables

## About Iptables 

- Iptables is a command line firewall utility that uses policy chains to allow or block traffic. 
- When a connection tries to establish itself on your system, iptables looks for a rule in its list to match it to. 
- If it doesn't find one, it resorts to the default action. 
- iptables almost always comes pre installed on any linux distribution. 

## Types of Chains 

- **`Input`** : This chain is used to control the behavior for incoming connections. For example, if a user attempts to SSH into your pc server, iptables will attempt to match the IP address and port to a rule in the input chain. 
- **`Forward`** : This chain is used for incoming connections that aren't actually being delivered locally. 
    Think of a router - data is always being sent to it but rarely actually destined for the router itself. 
- **`Output`** : This chain is used for outgoing connections. For example, if you try to ping howtogeek.com, iptables will check its output chain to see what the rules are regarding ping and howtogeek.com before making a decision to allow or deny the connection attempt. 

## Policy Chain defualt behavior 

- View the policy: **`sudo iptables -L | grep policy`**

## Allowing or Blocking Specific Connections 

### Connection from a single IP address

    - To block all connection from the ip adderess 10.10.10.10
    - Command : **`iptables -A INPUT -s 10.10.10.10 -j DROP`**

### Connections from a range of IP addresses

    - To block all of the IP addresses in the 10.10.10.0/24 network range
    - Command : **`iptables -A INPUT -s 10.10.10.0/24 -j DROP`**
    - Another Command : **`iptables -A INPUT -s 10.10.10.0/255.255.255.0 -j DROP`**

### Connections to a specific port 
    
    - Block port 22 or ssh connection from 10.10.10.10
    - Command : **`iptables -A INPUT -p tcp --dport ssh -s 10.10.10.10 -j DROP`**
    - Block ssh from any IP 
    - Command : **`iptables -A INPUT -p tcp --dport ssh -j DROP`**

## Reference 

- (https://www.howtogeek.com/177621/the-beginners-guide-to-iptables-the-linux-firewall/)[HowToGeek]
