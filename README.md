Link
https://unit-3-project.diegovasquez.me

resubmit questions

1 Where did you register your domain and what your domain name is?
My domain is from namecheap.com, and the name of my domain is diegovasquez.me.

2 How did you transfer DNS to Digital Ocean from that domain registrar?
I performed the DNS transfer by configuring custom name servers on namecheap.com. Under the names ns1.digitalocean.com, ns2.digitalocean.com, and ns3.digitalocean.com.

3 In Digital Ocean how did you create the A Record for the subdomain you deployed to?
I initiated the process by clicking on "Create", then followed by selecting "Domains/DNS." Afterward, I clicked on the specific domain name and proceeded to establish a new hostname that is directed to a customized IP address.

4 In your Virtual Machine what program did you use to setup your reverse proxy?
For setting up the reverse proxy, I used both Neovim and Nginx.

5 How did you create your SSL Certificate?
I created my SSL Cert by running the command certbot --nginx in the terminal.