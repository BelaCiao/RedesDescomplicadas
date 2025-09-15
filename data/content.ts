export const questions = [
  // Network Fundamentals (Expanded)
  {"id":1,"domain":"Network Fundamentals","pt":{"question":"Qual afirmação compara corretamente redes tradicionais e redes baseadas em controlador?","options":["Apenas redes tradicionais oferecem um plano de controle centralizado","Apenas redes tradicionais suportam nativamente gerenciamento centralizado","Redes tradicionais e baseadas em controlador abstraem políticas das configurações de dispositivos","Apenas redes baseadas em controlador desacoplam o plano de controle e o plano de dados"],"answer":3},"en":{"question":"Which statement correctly compares traditional networks and controller-based networks?","options":["Only traditional networks offer a centralized control plane","Only traditional networks natively support centralized management","Traditional and controller-based networks abstract policies from device configurations","Only controller-based networks decouple the control plane and the data plane"],"answer":3}},
  {"id":2,"domain":"Network Fundamentals","pt":{"question":"Como o HSRP fornece redundância de primeiro salto?","options":["Ele balanceia o tráfego atribuindo o mesmo valor de métrica a mais de uma rota para o mesmo destino.","Ele balanceia o tráfego da Camada 2 inundando o tráfego por todas as interfaces.","Ele encaminha múltiplos pacotes para o mesmo destino por diferentes links roteados.","Ele usa um MAC virtual compartilhado e um endereço IP virtual para um grupo de roteadores."],"answer":3},"en":{"question":"How does HSRP provide first hop redundancy?","options":["It load-balances traffic by assigning the same metric value to more than one route to the same destination.","It load-balances Layer 2 traffic by flooding traffic out all interfaces.","It forwards multiple packets to the same destination over different routed links.","It uses a shared virtual MAC and a virtual IP address to a group of routers."],"answer":3}},
  {"id":3,"domain":"Network Fundamentals","pt":{"question":"Quais duas ações influenciam o processo de seleção de rota do EIGRP? (Escolha duas)","options":["O roteador calcula a distância relatada multiplicando o atraso por 256.","O roteador calcula o melhor caminho de backup e o atribui como o sucessor viável.","O roteador calcula a distância viável de todos os caminhos para o destino.","A distância anunciada é calculada por um vizinho downstream."],"answer":[1,2]},"en":{"question":"Which two actions influence the EIGRP route selection process? (Choose two)","options":["The router calculates the reported distance by multiplying the delay by 256.","The router calculates the best backup path and assigns it as the feasible successor.","The router calculates the feasible distance of all paths to the destination.","The advertised distance is calculated by a downstream neighbor."],"answer":[1,2]}},
  {"id":4,"domain":"Network Fundamentals","pt":{"question":"Quais duas capacidades do Cisco DNA Center o tornam mais extensível? (Escolha duas)","options":["adaptadores que suportam todas as famílias de software Cisco IOS","SDKs que suportam interação com equipamentos de terceiros","APIs REST que permitem que aplicativos externos interajam com o Cisco DNA Center","design modular que é atualizável conforme necessário"],"answer":[2,3]},"en":{"question":"Which two capacities of Cisco DNA Center make it more extensible? (Choose two)","options":["adapters that support all families of Cisco IOS software","SDKs that support interaction with third-party network equipment","REST APIs that allow for external applications to interact natively with Cisco DNA Center","modular design that is upgradable as needed"],"answer":[2,3]}},
  {"id":5,"domain":"Network Fundamentals","pt":{"question":"Um administrador de rede precisa configurar o OSPFv2 em uma rede. Qual comando o administrador usa para habilitar o OSPFv2 em uma interface de roteador?","options":["ip ospf 1 area 0","network 192.168.1.1 0.0.0.0 area 0","router ospf 1","ospf enable 1 area 0"],"answer":0},"en":{"question":"A network administrator must configure OSPFv2 in a network. Which command does the administrator use to enable OSPFv2 on a router interface?","options":["ip ospf 1 area 0","network 192.168.1.1 0.0.0.0 area 0","router ospf 1","ospf enable 1 area 0"],"answer":0}},
  {"id":7,"domain":"Network Fundamentals","pt":{"question":"Qual é a distância administrativa padrão para OSPF?","options":["90","100","110","120"],"answer":2},"en":{"question":"What is the default administrative distance for OSPF?","options":["90","100","110","120"],"answer":2}},
  {"id":8,"domain":"Network Fundamentals","pt":{"question":"Qual componente da arquitetura de rede definida por software (SDN) é considerado o cérebro da rede?","options":["Plano de Dados","Plano de Controle","Plano de Gerenciamento","Plano de Aplicação"],"answer":1},"en":{"question":"Which component of the software-defined networking (SDN) architecture is considered the brain of the network?","options":["Data Plane","Control Plane","Management Plane","Application Plane"],"answer":1}},
  {"id":9,"domain":"Network Fundamentals","pt":{"question":"Qual é o propósito de uma máscara de sub-rede em redes IPv4?","options":["Identificar o endereço de broadcast da rede.","Diferenciar a porção de rede da porção de host de um endereço IP.","Identificar o endereço do gateway padrão.","Fornecer o endereço MAC do dispositivo."],"answer":1},"en":{"question":"What is the purpose of a subnet mask in IPv4 networking?","options":["To identify the broadcast address of the network.","To differentiate the network portion from the host portion of an IP address.","To identify the default gateway address.","To provide the MAC address of the device."],"answer":1}},
  {"id":10,"domain":"Network Fundamentals","pt":{"question":"Qual camada do modelo OSI é responsável pela formatação dos dados, compressão e criptografia?","options":["Camada de Aplicação","Camada de Apresentação","Camada de Sessão","Camada de Transporte"],"answer":1},"en":{"question":"Which OSI model layer is responsible for data formatting, compression, and encryption?","options":["Application Layer","Presentation Layer","Session Layer","Transport Layer"],"answer":1}},
  {"id":11,"domain":"Network Fundamentals","pt":{"question":"Qual protocolo usa UDP para transferência de arquivos, mas não garante a entrega?","options":["FTP","TFTP","HTTP","SMTP"],"answer":1},"en":{"question":"Which protocol uses UDP for file transfer but does not guarantee delivery?","options":["FTP","TFTP","HTTP","SMTP"],"answer":1}},
  
  // Network Access (Expanded)
  {"id":6,"domain":"Network Access","pt":{"question":"Qual tipo de quadro 802.11 é a resposta de associação (association response)?","options":["gerenciamento","quadro protegido","controle","ação"],"answer":0},"en":{"question":"Which 802.11 frame type is association response?","options":["management","protected frame","control","action"],"answer":0}},
  {"id":12,"domain":"Network Access","pt":{"question":"Qual protocolo é usado para evitar loops de switching em uma rede com caminhos redundantes?","options":["HSRP","STP","VTP","EIGRP"],"answer":1},"en":{"question":"Which protocol is used to prevent switching loops in a network with redundant paths?","options":["HSRP","STP","VTP","EIGRP"],"answer":1}},
  {"id":13,"domain":"Network Access","pt":{"question":"Em uma porta de switch Cisco configurada com Port Security, qual violação de segurança (violation mode) descarta os pacotes do endereço MAC infrator e envia uma notificação SNMP?","options":["shutdown","restrict","protect","disable"],"answer":1},"en":{"question":"On a Cisco switch port configured with Port Security, which violation mode drops the packets from the offending MAC address and sends an SNMP notification?","options":["shutdown","restrict","protect","disable"],"answer":1}},
  {"id":14,"domain":"Network Access","pt":{"question":"Qual é o propósito do DTP (Dynamic Trunking Protocol)?","options":["Negociar automaticamente a formação de um link de tronco entre dois switches.","Atribuir dinamicamente endereços IP a hosts.","Prevenir loops de Camada 2.","Autenticar usuários na rede."],"answer":0},"en":{"question":"What is the purpose of DTP (Dynamic Trunking Protocol)?","options":["To automatically negotiate the formation of a trunk link between two switches.","To dynamically assign IP addresses to hosts.","To prevent Layer 2 loops.","To authenticate users on the network."],"answer":0}},
  {"id":15,"domain":"Network Access","pt":{"question":"Um administrador configura uma porta de switch com o comando `switchport port-security mac-address sticky`. Qual é o efeito deste comando?","options":["O administrador deve configurar manualmente os endereços MAC permitidos.","O switch aprende dinamicamente o primeiro endereço MAC e o salva na configuração.","A porta é desligada se qualquer endereço MAC for detectado.","Apenas endereços MAC estáticos são permitidos."],"answer":1},"en":{"question":"An administrator configures a switch port with the command `switchport port-security mac-address sticky`. What is the effect of this command?","options":["The administrator must manually configure the allowed MAC addresses.","The switch dynamically learns the first MAC address and saves it to the configuration.","The port is shut down if any MAC address is detected.","Only static MAC addresses are allowed."],"answer":1}},
  {"id":16,"domain":"Network Access","pt":{"question":"Qual tecnologia permite que múltiplos switches se comportem como um único switch lógico?","options":["VLAN","EtherChannel","StackWise","HSRP"],"answer":2},"en":{"question":"Which technology allows multiple switches to behave as a single logical switch?","options":["VLAN","EtherChannel","StackWise","HSRP"],"answer":2}},
  {"id":17,"domain":"Network Access","pt":{"question":"Qual modo do VTP (VLAN Trunking Protocol) permite que um switch crie, modifique e exclua VLANs, mas não salve as informações em sua NVRAM?","options":["Server","Client","Transparent","Off"],"answer":2},"en":{"question":"Which VTP (VLAN Trunking Protocol) mode allows a switch to create, modify, and delete VLANs, but does not save the information in its NVRAM?","options":["Server","Client","Transparent","Off"],"answer":2}},
  {"id":18,"domain":"Network Access","pt":{"question":"Qual padrão IEEE descreve o Spanning Tree Protocol (STP)?","options":["802.1Q","802.1D","802.3","802.11"],"answer":1},"en":{"question":"Which IEEE standard describes the Spanning Tree Protocol (STP)?","options":["802.1Q","802.1D","802.3","802.11"],"answer":1}},
  {"id":19,"domain":"Network Access","pt":{"question":"No Rapid PVST+, qual estado de porta combina os estados de escuta e aprendizado do STP tradicional?","options":["Forwarding","Blocking","Learning","Disabled"],"answer":2},"en":{"question":"In Rapid PVST+, which port state combines the listening and learning states of traditional STP?","options":["Forwarding","Blocking","Learning","Disabled"],"answer":2}},
  {"id":20,"domain":"Network Access","pt":{"question":"Qual comando é usado para configurar uma porta de switch para pertencer à VLAN 10?","options":["switchport vlan 10","switchport mode access vlan 10","switchport access vlan 10","vlan 10"],"answer":2},"en":{"question":"Which command is used to configure a switch port to belong to VLAN 10?","options":["switchport vlan 10","switchport mode access vlan 10","switchport access vlan 10","vlan 10"],"answer":2}},
  
  // IP Connectivity (New)
  {"id":21,"domain":"IP Connectivity","pt":{"question":"Qual é o endereço de broadcast para a rede 192.168.10.128/26?","options":["192.168.10.191","192.168.10.255","192.168.10.192","192.168.10.129"],"answer":0},"en":{"question":"What is the broadcast address for the network 192.168.10.128/26?","options":["192.168.10.191","192.168.10.255","192.168.10.192","192.168.10.129"],"answer":0}},
  {"id":22,"domain":"IP Connectivity","pt":{"question":"Qual protocolo de roteamento é um protocolo de gateway exterior (EGP)?","options":["OSPF","EIGRP","RIP","BGP"],"answer":3},"en":{"question":"Which routing protocol is an exterior gateway protocol (EGP)?","options":["OSPF","EIGRP","RIP","BGP"],"answer":3}},
  {"id":23,"domain":"IP Connectivity","pt":{"question":"Um administrador configura uma rota estática com o comando `ip route 10.0.0.0 255.0.0.0 192.168.1.1`. O que o endereço 192.168.1.1 representa?","options":["A rede de destino","A interface de saída","O próximo salto (next hop)","A máscara de sub-rede"],"answer":2},"en":{"question":"An administrator configures a static route with the command `ip route 10.0.0.0 255.0.0.0 192.168.1.1`. What does the address 192.168.1.1 represent?","options":["The destination network","The exit interface","The next hop","The subnet mask"],"answer":2}},
  {"id":24,"domain":"IP Connectivity","pt":{"question":"Qual tipo de endereço IPv6 é usado para comunicação em um único segmento de rede local e não é roteável?","options":["Global Unicast","Unique Local","Link-Local","Multicast"],"answer":2},"en":{"question":"Which type of IPv6 address is used for communication on a single local network segment and is not routable?","options":["Global Unicast","Unique Local","Link-Local","Multicast"],"answer":2}},
  {"id":25,"domain":"IP Connectivity","pt":{"question":"No OSPF, qual roteador é responsável por gerar LSAs do Tipo 3 (Summary LSAs)?","options":["Designated Router (DR)","Backup Designated Router (BDR)","Area Border Router (ABR)","Autonomous System Boundary Router (ASBR)"],"answer":2},"en":{"question":"In OSPF, which router is responsible for generating Type 3 LSAs (Summary LSAs)?","options":["Designated Router (DR)","Backup Designated Router (BDR)","Area Border Router (ABR)","Autonomous System Boundary Router (ASBR)"],"answer":2}},
  {"id":26,"domain":"IP Connectivity","pt":{"question":"Qual é o propósito do NAT (Network Address Translation)?","options":["Traduzir endereços IP privados em endereços IP públicos.","Atribuir endereços IP dinamicamente.","Fornecer segurança de Camada 2.","Criar redes virtuais."],"answer":0},"en":{"question":"What is the purpose of NAT (Network Address Translation)?","options":["To translate private IP addresses into public IP addresses.","To assign IP addresses dynamically.","To provide Layer 2 security.","To create virtual networks."],"answer":0}},
  {"id":27,"domain":"IP Connectivity","pt":{"question":"Qual variante de NAT permite que múltiplos hosts internos compartilhem um único endereço IP público usando números de porta diferentes?","options":["Static NAT","Dynamic NAT","PAT (Port Address Translation)","NAT Traversal"],"answer":2},"en":{"question":"Which NAT variant allows multiple internal hosts to share a single public IP address using different port numbers?","options":["Static NAT","Dynamic NAT","PAT (Port Address Translation)","NAT Traversal"],"answer":2}},
  {"id":28,"domain":"IP Connectivity","pt":{"question":"Qual é a distância administrativa de uma rota estática flutuante?","options":["1","5","254","Maior que a do protocolo de roteamento dinâmico que ela está substituindo"],"answer":3},"en":{"question":"What is the administrative distance of a floating static route?","options":["1","5","254","Greater than that of the dynamic routing protocol it is backing up"],"answer":3}},
  {"id":29,"domain":"IP Connectivity","pt":{"question":"Qual é o endereço multicast que os roteadores OSPF usam para enviar pacotes Hello?","options":["224.0.0.5","224.0.0.9","224.0.0.10","224.0.0.1"],"answer":0},"en":{"question":"What is the multicast address that OSPF routers use to send Hello packets?","options":["224.0.0.5","224.0.0.9","224.0.0.10","224.0.0.1"],"answer":0}},
  {"id":30,"domain":"IP Connectivity","pt":{"question":"Qual comando exibe a tabela de roteamento de um roteador Cisco?","options":["show ip interface brief","show running-config","show ip route","show version"],"answer":2},"en":{"question":"Which command displays the routing table of a Cisco router?","options":["show ip interface brief","show running-config","show ip route","show version"],"answer":2}},

  // IP Services (New)
  {"id":31,"domain":"IP Services","pt":{"question":"Qual protocolo fornece atribuição automática de endereços IP a clientes em uma rede?","options":["DNS","DHCP","SNMP","NTP"],"answer":1},"en":{"question":"Which protocol provides automatic IP address assignment to clients on a network?","options":["DNS","DHCP","SNMP","NTP"],"answer":1}},
  {"id":32,"domain":"IP Services","pt":{"question":"Um administrador precisa monitorar o tráfego de rede e coletar estatísticas. Qual protocolo é mais adequado para essa tarefa?","options":["Syslog","NetFlow","FTP","NTP"],"answer":1},"en":{"question":"An administrator needs to monitor network traffic and collect statistics. Which protocol is best suited for this task?","options":["Syslog","NetFlow","FTP","NTP"],"answer":1}},
  {"id":33,"domain":"IP Services","pt":{"question":"Qual mensagem DHCP é enviada por um cliente para aceitar uma oferta de endereço IP de um servidor DHCP?","options":["DHCPDISCOVER","DHCPOFFER","DHCPREQUEST","DHCPACK"],"answer":2},"en":{"question":"Which DHCP message is sent by a client to accept an IP address offer from a DHCP server?","options":["DHCPDISCOVER","DHCPOFFER","DHCPREQUEST","DHCPACK"],"answer":2}},
  {"id":34,"domain":"IP Services","pt":{"question":"Qual é o propósito do NTP (Network Time Protocol)?","options":["Resolver nomes de domínio para endereços IP.","Sincronizar os relógios de dispositivos de rede.","Transferir arquivos entre sistemas.","Gerenciar dispositivos de rede remotamente."],"answer":1},"en":{"question":"What is the purpose of NTP (Network Time Protocol)?","options":["To resolve domain names to IP addresses.","To synchronize the clocks of network devices.","To transfer files between systems.","To manage network devices remotely."],"answer":1}},
  {"id":35,"domain":"IP Services","pt":{"question":"Qual recurso do QoS (Qualidade de Serviço) é usado para dar prioridade a certos tipos de tráfego, como voz sobre IP (VoIP)?","options":["Classification and Marking","Congestion Management","Congestion Avoidance","Policing and Shaping"],"answer":0},"en":{"question":"Which QoS (Quality of Service) feature is used to prioritize certain types of traffic, such as Voice over IP (VoIP)?","options":["Classification and Marking","Congestion Management","Congestion Avoidance","Policing and Shaping"],"answer":0}},
  {"id":36,"domain":"IP Services","pt":{"question":"Qual protocolo é usado para resolver um endereço IP para um endereço MAC?","options":["DHCP","DNS","ARP","RARP"],"answer":2},"en":{"question":"Which protocol is used to resolve an IP address to a MAC address?","options":["DHCP","DNS","ARP","RARP"],"answer":2}},
  {"id":37,"domain":"IP Services","pt":{"question":"Qual comando pode ser usado em um PC com Windows para verificar a resolução de nomes de domínio?","options":["ping","tracert","ipconfig","nslookup"],"answer":3},"en":{"question":"Which command can be used on a Windows PC to check domain name resolution?","options":["ping","tracert","ipconfig","nslookup"],"answer":3}},
  {"id":38,"domain":"IP Services","pt":{"question":"Qual porta UDP é usada pelo servidor DNS?","options":["53","67","69","123"],"answer":0},"en":{"question":"Which UDP port is used by the DNS server?","options":["53","67","69","123"],"answer":0}},
  {"id":39,"domain":"IP Services","pt":{"question":"O que o comando `show cdp neighbors` exibe?","options":["A tabela de roteamento IP.","Dispositivos Cisco diretamente conectados.","A configuração em execução.","O status das interfaces."],"answer":1},"en":{"question":"What does the `show cdp neighbors` command display?","options":["The IP routing table.","Directly connected Cisco devices.","The running configuration.","The status of the interfaces."],"answer":1}},
  {"id":40,"domain":"IP Services","pt":{"question":"Qual mecanismo de syslog tem o maior nível de severidade (menor número)?","options":["warnings (4)","errors (3)","critical (2)","emergencies (0)"],"answer":3},"en":{"question":"Which syslog facility has the highest severity level (lowest number)?","options":["warnings (4)","errors (3)","critical (2)","emergencies (0)"],"answer":3}},

  // Security Fundamentals (New)
  {"id":41,"domain":"Security Fundamentals","pt":{"question":"Qual é o principal objetivo de uma ACL (Lista de Controle de Acesso)?","options":["Filtrar o tráfego com base em endereços IP, portas e outros critérios.","Atribuir endereços IP.","Fornecer redundância.","Autenticar usuários."],"answer":0},"en":{"question":"What is the main purpose of an ACL (Access Control List)?","options":["To filter traffic based on IP addresses, ports, and other criteria.","To assign IP addresses.","To provide redundancy.","To authenticate users."],"answer":0}},
  {"id":42,"domain":"Security Fundamentals","pt":{"question":"Onde uma ACL padrão deve ser colocada para ser mais eficiente?","options":["O mais próximo possível do destino.","O mais próximo possível da origem.","Em qualquer roteador entre a origem e o destino.","Em um switch de Camada 2."],"answer":0},"en":{"question":"Where should a standard ACL be placed to be most efficient?","options":["As close to the destination as possible.","As close to the source as possible.","On any router between the source and destination.","On a Layer 2 switch."],"answer":0}},
  {"id":43,"domain":"Security Fundamentals","pt":{"question":"Qual protocolo é usado para fornecer acesso administrativo seguro e criptografado a um dispositivo de rede?","options":["Telnet","SSH","HTTP","FTP"],"answer":1},"en":{"question":"Which protocol is used to provide secure, encrypted administrative access to a network device?","options":["Telnet","SSH","HTTP","FTP"],"answer":1}},
  {"id":44,"domain":"Security Fundamentals","pt":{"question":"Qual é o propósito do DHCP Snooping em um switch?","options":["Prevenir que servidores DHCP não autorizados forneçam endereços IP.","Monitorar o tráfego DHCP.","Atribuir endereços IP.","Traduzir endereços DHCP."],"answer":0},"en":{"question":"What is the purpose of DHCP Snooping on a switch?","options":["To prevent unauthorized DHCP servers from providing IP addresses.","To monitor DHCP traffic.","To assign IP addresses.","To translate DHCP addresses."],"answer":0}},
  {"id":45,"domain":"Security Fundamentals","pt":{"question":"Qual conceito de segurança envolve os três pilares: Confidencialidade, Integridade e Disponibilidade?","options":["A Tríade CIA","Defesa em Profundidade","O Princípio do Menor Privilégio","O Modelo de Confiança Zero"],"answer":0},"en":{"question":"Which security concept involves the three pillars: Confidentiality, Integrity, and Availability?","options":["The CIA Triad","Defense in Depth","The Principle of Least Privilege","The Zero Trust Model"],"answer":0}},
  {"id":46,"domain":"Security Fundamentals","pt":{"question":"Qual tipo de ataque de segurança envolve o envio de um grande volume de tráfego para sobrecarregar um serviço ou rede?","options":["Phishing","Man-in-the-Middle","DDoS (Distributed Denial of Service)","Spoofing"],"answer":2},"en":{"question":"Which type of security attack involves sending a large volume of traffic to overwhelm a service or network?","options":["Phishing","Man-in-the-Middle","DDoS (Distributed Denial of Service)","Spoofing"],"answer":2}},
  {"id":47,"domain":"Security Fundamentals","pt":{"question":"Qual recurso de segurança sem fio usa uma chave pré-compartilhada para autenticação?","options":["WPA2-Enterprise","WPA2-Personal (PSK)","WEP","Open Authentication"],"answer":1},"en":{"question":"Which wireless security feature uses a pre-shared key for authentication?","options":["WPA2-Enterprise","WPA2-Personal (PSK)","WEP","Open Authentication"],"answer":1}},
  {"id":48,"domain":"Security Fundamentals","pt":{"question":"Qual comando é usado para aplicar uma ACL a uma interface de roteador na direção de entrada?","options":["ip access-group 101 in","ip access-list 101 in","access-class 101 in","ip policy 101 in"],"answer":0},"en":{"question":"Which command is used to apply an ACL to a router interface in the inbound direction?","options":["ip access-group 101 in","ip access-list 101 in","access-class 101 in","ip policy 101 in"],"answer":0}},
  {"id":49,"domain":"Security Fundamentals","pt":{"question":"Qual é a última instrução implícita em qualquer ACL?","options":["permit any any","deny any any","permit ip any any","deny ip any any"],"answer":3},"en":{"question":"What is the last implicit statement in any ACL?","options":["permit any any","deny any any","permit ip any any","deny ip any any"],"answer":3}},
  {"id":50,"domain":"Security Fundamentals","pt":{"question":"Qual protocolo é usado para autenticação centralizada, autorização e contabilização (AAA)?","options":["RADIUS","TACACS+","Kerberos","LDAP"],"answer":1},"en":{"question":"Which protocol is used for centralized authentication, authorization, and accounting (AAA)?","options":["RADIUS","TACACS+","Kerberos","LDAP"],"answer":1}},

  // Automation and Programmability (New)
  {"id":51,"domain":"Automation and Programmability","pt":{"question":"Qual formato de dados é legível por humanos e comumente usado em arquivos de configuração e APIs REST?","options":["XML","JSON","YAML","HTML"],"answer":2},"en":{"question":"Which data format is human-readable and commonly used in configuration files and REST APIs?","options":["XML","JSON","YAML","HTML"],"answer":2}},
  {"id":52,"domain":"Automation and Programmability","pt":{"question":"Qual ferramenta de gerenciamento de configuração é baseada em Python e usa um modelo 'push' sem agentes?","options":["Puppet","Chef","Ansible","SaltStack"],"answer":2},"en":{"question":"Which configuration management tool is Python-based and uses an agentless 'push' model?","options":["Puppet","Chef","Ansible","SaltStack"],"answer":2}},
  {"id":53,"domain":"Automation and Programmability","pt":{"question":"Em uma arquitetura baseada em controlador como o Cisco DNA Center, qual plano é separado do hardware físico?","options":["Plano de Dados","Plano de Controle","Plano de Hardware","Plano de Energia"],"answer":1},"en":{"question":"In a controller-based architecture like Cisco DNA Center, which plane is separated from the physical hardware?","options":["Data Plane","Control Plane","Hardware Plane","Power Plane"],"answer":1}},
  {"id":54,"domain":"Automation and Programmability","pt":{"question":"Qual verbo HTTP é usado em uma API REST para solicitar dados de um recurso específico?","options":["GET","POST","PUT","DELETE"],"answer":0},"en":{"question":"Which HTTP verb is used in a REST API to request data from a specified resource?","options":["GET","POST","PUT","DELETE"],"answer":0}}
];

export const termsData: Record<string, { title: string; definition: string; analogy: string }> = {
    'vlan': {
        title: 'VLAN (Virtual LAN)',
        definition: 'Uma forma de segmentar uma rede física em múltiplas redes lógicas e independentes.',
        analogy: 'Pense em um prédio comercial. Cada andar representa uma empresa diferente (uma VLAN). Pessoas no mesmo andar (mesma VLAN) podem conversar facilmente, mas para falar com alguém de outro andar (outra VLAN), precisam usar o elevador (o roteador).'
    },
    'ip': {
        title: 'Endereço IP (Internet Protocol)',
        definition: 'Um endereço lógico e numérico que identifica unicamente um dispositivo em uma rede.',
        analogy: 'É como o endereço da sua casa (ex: Rua Principal, 123). É como os pacotes de dados sabem para onde ir na internet.'
    },
    'mac': {
        title: 'Endereço MAC (Media Access Control)',
        definition: 'Um endereço físico único, gravado na placa de rede do dispositivo pelo fabricante.',
        analogy: 'É como o número do chassi de um carro. É um identificador único e permanente do hardware, enquanto o endereço IP é como a placa, que pode mudar se você se mudar para outro estado.'
    },
     'gateway': {
        title: 'Gateway Padrão',
        definition: 'O dispositivo (geralmente um roteador) que serve como ponto de saída de uma rede local para outras redes, como a internet.',
        analogy: 'É a porta principal da sua casa. Para sair para a rua (internet) ou receber visitas (dados de fora), tudo passa por essa porta.'
    },
    'dns': {
        title: 'DNS (Domain Name System)',
        definition: 'O sistema que traduz nomes de domínio legíveis por humanos (ex: www.google.com) em endereços IP numéricos que os computadores entendem.',
        analogy: 'É a lista de contatos do seu celular. Você procura por um nome, e o celular disca o número correspondente automaticamente.'
    },
    'dhcp': {
        title: 'DHCP (Dynamic Host Configuration Protocol)',
        definition: 'Um protocolo que atribui automaticamente endereços IP e outras informações de rede a dispositivos quando eles se conectam.',
        analogy: 'É como um recepcionista de hotel que entrega as chaves dos quartos (endereços IP) para os hóspedes (dispositivos) assim que eles chegam, por um tempo limitado.'
    },
    'tcp': {
        title: 'TCP (Transmission Control Protocol)',
        definition: 'Um protocolo de transporte confiável que garante que todos os pacotes de dados sejam entregues na ordem correta e sem erros.',
        analogy: 'É como enviar uma encomenda importante com rastreamento e confirmação de entrega. Você sabe que ela chegou, em que ordem e se alguma parte foi perdida no caminho.'
    }
};

export const topicsData: Record<string, { title: string; content: string }> = {
    'boas_vindas_1': {
        title: 'Boas-vindas à Sua Jornada em Redes',
        content: `
            <h3>Bem-vindo, futuro especialista em conectividade!</h3>
            <p>É com grande prazer que te recebo na Academia da Rede. Meu nome é Maicon Gois e serei seu guia nesta jornada que transformará sua curiosidade em conhecimento sólido e prático.</p>
            <p>Juntos, vamos explorar o universo das redes de computadores, começando pelos conceitos mais básicos e avançando de forma consistente por temas como Mikrotik, Linux, segurança cibernética e as complexas arquiteturas de BGP que sustentam a internet dos provedores.</p>
            <h4>O que esperar desta experiência?</h4>
            <ul>
                <li><strong>Conteúdo direto ao ponto:</strong> Aulas focadas nas habilidades que o mercado de trabalho realmente exige.</li>
                <li><strong>Prática em ambientes realistas:</strong> Utilizaremos o simulador EVE-NG para construir e gerenciar redes que espelham infraestruturas corporativas.</li>
                <li><strong>Aprendizado interativo:</strong> Ao final de cada tópico, use a funcionalidade "IA Responde" para sanar dúvidas e solidificar seu aprendizado.</li>
            </ul>
            <p>Estou empolgado para começarmos. Prepare-se para mergulhar na tecnologia que move o mundo digital. Vamos nessa!</p>
        `
    },
    'introducao_redes_1': {
        title: 'Decifrando as Redes',
        content: `
            <h3>O Ponto de Partida</h3>
            <p>Nesta aula inaugural, vamos desvendar o conceito de rede de computadores. De forma simples, uma rede consiste em dois ou mais dispositivos conectados que trocam informações e compartilham recursos. Essa é a espinha dorsal de toda a nossa vida digital, permitindo desde uma simples mensagem instantânea até o streaming de filmes em alta definição. Nosso objetivo aqui é entender os princípios que tornam essa comunicação possível.</p>
        `
    },
    'introducao_redes_2': {
        title: 'O Propósito da Conectividade',
        content: `
            <h3>Compartilhamento de Recursos e Informações</h3>
            <p>O principal objetivo de uma rede é otimizar o uso de recursos e facilitar a colaboração. Entre os principais benefícios, destacam-se:</p>
            <ul>
                <li><strong>Dados e Informações:</strong> A troca de informações é a razão primária para a existência de uma rede.</li>
                <li><strong>Recursos de Hardware:</strong> Equipamentos como impressoras, scanners e sistemas de armazenamento podem ser acessados por múltiplos usuários, reduzindo custos.</li>
                <li><strong>Recursos de Software:</strong> Aplicações e sistemas podem ser centralizados em um servidor, simplificando a gestão e o acesso.</li>
                <li><strong>Acesso à Internet:</strong> Uma única conexão com a internet pode ser distribuída de forma segura para todos os dispositivos em uma rede local.</li>
            </ul>
        `
    },
    'introducao_redes_3': {
        title: 'Desenhando a Rede: Topologias',
        content: `
            <h3>O que é Topologia de Rede?</h3>
            <p>Topologia refere-se ao mapa ou arranjo de uma rede. Ela descreve como os dispositivos estão interconectados, tanto do ponto de vista físico (a disposição dos cabos) quanto lógico (o fluxo dos dados).</p>
            <h4>Principais Tipos:</h4>
            <ul>
                <li><strong>Estrela (Star):</strong> A mais comum hoje em dia. Todos os dispositivos se conectam a um ponto central, como um switch. A falha em um cabo afeta apenas um único dispositivo, tornando a rede mais resiliente.</li>
                <li><strong>Malha (Mesh):</strong> Oferece alta redundância, pois cada dispositivo se conecta a vários outros. É fundamental para a estabilidade do núcleo da internet.</li>
                <li><strong>Barramento (Bus):</strong> Uma topologia mais antiga onde todos os dispositivos compartilham um cabo principal. Era simples, mas uma falha no cabo paralisava toda a rede.</li>
                <li><strong>Anel (Ring):</strong> Os dispositivos formam um circuito fechado, com os dados passando de um nó para o outro em sequência.</li>
            </ul>
        `
    },
    'introducao_redes_4': {
        title: 'Conhecendo os Equipamentos',
        content: `
            <h3>Os Pilares da Conectividade</h3>
            <ul>
                <li><strong>Roteador (Router):</strong> O "cérebro" da operação, responsável por conectar redes distintas (como sua rede local e a internet) e decidir o melhor caminho para os dados.</li>
                <li><strong>Switch:</strong> O gestor de tráfego da rede local (LAN). Ele direciona os dados de forma inteligente, entregando-os apenas ao dispositivo de destino correto, o que otimiza a comunicação.</li>
                <li><strong>Access Point (AP):</strong> A porta de entrada para o mundo sem fio, permitindo que smartphones, notebooks e outros dispositivos se conectem à rede via Wi-Fi.</li>
                <li><strong>Firewall:</strong> O "segurança" da sua rede. Ele atua como uma barreira, monitorando e filtrando o tráfego com base em regras predefinidas para proteger contra ameaças externas.</li>
            </ul>
        `
    },
    'introducao_redes_5': {
        title: 'Classificação por Escala',
        content: `
            <h3>Classificação por Abrangência Geográfica</h3>
            <p>As redes são categorizadas com base em seu tamanho e alcance geográfico:</p>
            <ul>
                <li><strong>LAN (Local Area Network):</strong> Rede de Área Local. Cobre uma área restrita como uma residência, escritório ou um único edifício.</li>
                <li><strong>WLAN (Wireless Local Area Network):</strong> Essencialmente uma LAN que utiliza tecnologia sem fio (Wi-Fi) para conectar dispositivos.</li>
                <li><strong>MAN (Metropolitan Area Network):</strong> Rede de Área Metropolitana. Interconecta redes dentro de uma cidade ou um grande campus.</li>
                <li><strong>WAN (Wide Area Network):</strong> Rede de Área Ampla. Conecta redes geograficamente distantes, podendo abranger países ou continentes. A internet é o maior exemplo de uma WAN.</li>
            </ul>
        `
    },
    'introducao_redes_6': {
        title: 'IPs: Endereços Públicos vs. Privados',
        content: `
            <h3>A Dupla Identidade na Rede</h3>
            <p>Todo dispositivo na internet possui um endereço IP, mas eles se dividem em duas categorias cruciais:</p>
            <p><strong>IP Público:</strong> É o seu endereço "oficial" na internet, único em todo o mundo, fornecido pelo seu Provedor de Serviços de Internet (ISP). É através dele que o mundo exterior se comunica com sua rede.</p>
            <p><strong>IP Privado:</strong> Utilizado internamente na sua rede local (LAN), em faixas reservadas como <code>192.168.x.x</code> ou <code>10.x.x.x</code>. Esses endereços não são roteáveis na internet e permitem que vários dispositivos compartilhem um único IP público através de um processo chamado <strong>NAT (Network Address Translation)</strong>.</p>
        `
    },
    'introducao_redes_7': {
        title: 'A Função da Máscara de Sub-rede',
        content: `
            <h3>O que é a Máscara de Sub-rede?</h3>
            <p>A máscara de sub-rede é um número de 32 bits que funciona como um divisor para um endereço IP, separando-o em duas partes: o identificador da rede e o identificador do host. Ela informa aos dispositivos qual parte do IP representa a "vizinhança" (a rede) e qual parte identifica o "lote" específico (o dispositivo).</p>
            <p>Por exemplo, para o IP <code>192.168.1.10</code> com a máscara <code>255.255.255.0</code>, a máscara define que <code>192.168.1</code> é a rede, enquanto <code>10</code> é o host. Dispositivos na mesma rede se comunicam diretamente; para falar com o mundo exterior, eles precisam de um roteador.</p>
        `
    },
    'introducao_redes_8': {
        title: 'Protocolos: A Linguagem da Rede',
        content: `
            <h3>As Regras da Comunicação Digital</h3>
            <p>Protocolos são conjuntos de regras formais que ditam como os dados devem ser formatados, transmitidos e recebidos. São como os idiomas e as gramáticas que permitem que dispositivos de diferentes fabricantes se comuniquem sem mal-entendidos.</p>
            <h4>Protocolos Essenciais:</h4>
            <ul>
                <li><strong>IP (Internet Protocol):</strong> O protocolo base, responsável pelo sistema de endereçamento lógico e pelo roteamento de pacotes entre redes.</li>
                <li><strong>TCP (Transmission Control Protocol):</strong> Focado em confiabilidade. Garante que os dados cheguem integralmente, na ordem correta, e com confirmação. Usado para e-mails, navegação web e transferências de arquivos.</li>
                <li><strong>UDP (User Datagram Protocol):</strong> Focado em velocidade. Envia os dados rapidamente, sem a sobrecarga da verificação de entrega. Ideal para streaming, jogos online e chamadas de voz.</li>
                <li><strong>HTTP (Hypertext Transfer Protocol):</strong> O alicerce da World Wide Web, utilizado para carregar páginas e recursos da internet.</li>
            </ul>
        `
    },
    'introducao_redes_9': {
        title: 'Anatomia de uma Rede',
        content: `
            <h3>Os Blocos de Construção da Conectividade</h3>
            <p>Nesta aula, consolidamos os componentes que formam uma rede funcional e robusta:</p>
            <ul>
                <li><strong>Componentes Físicos (Hardware):</strong> A base tangível da rede, incluindo placas de rede (NICs), cabos (UTP, fibra), switches, roteadores e access points.</li>
                <li><strong>Componentes Lógicos (Software):</strong> A inteligência que opera sobre o hardware, como sistemas operacionais de rede (Cisco IOS, RouterOS), os protocolos do conjunto TCP/IP, drivers e as aplicações que utilizamos (navegadores, etc.).</li>
            </ul>
            <p>A harmonia entre hardware e software é o que permite que a comunicação de dados flua de maneira eficiente e segura.</p>
        `
    },
    'introducao_redes_10': {
        title: 'DNS: A Agenda de Contatos da Web',
        content: `
            <h3>DNS: O Tradutor da Internet</h3>
            <p>O DNS (Domain Name System) é um sistema hierárquico e distribuído globalmente que funciona como a "agenda de contatos" da internet. Sua função primordial é traduzir nomes de domínio amigáveis para humanos (ex: <code>www.google.com</code>) nos endereços IP numéricos que as máquinas utilizam para se localizar (ex: <code>142.250.218.100</code>).</p>
            <p>Sem o DNS, a navegação na web como a conhecemos seria impossível, pois exigiriam que memorizássemos sequências numéricas complexas para cada serviço online.</p>
        `
    },
    'introducao_redes_11': {
        title: 'Modelo OSI: As 7 Camadas',
        content: `
            <h3>O Guia para a Comunicação de Rede</h3>
            <p>O Modelo OSI (Open Systems Interconnection) é um modelo de referência que padroniza as funções de uma rede em sete camadas lógicas. Ele nos ajuda a visualizar e a entender o processo de comunicação de ponta a ponta, desde o meio físico até a aplicação final.</p>
            <ol>
                <li><strong>Camada 7 - Aplicação:</strong> Interface com o usuário final (HTTP, FTP, SMTP).</li>
                <li><strong>Camada 6 - Apresentação:</strong> Tradução de dados, criptografia e compressão.</li>
                <li><strong>Camada 5 - Sessão:</strong> Gerenciamento do diálogo e da conexão entre aplicações.</li>
                <li><strong>Camada 4 - Transporte:</strong> Entrega confiável ou rápida dos dados (TCP/UDP).</li>
                <li><strong>Camada 3 - Rede:</strong> Endereçamento lógico (IP) e determinação do melhor caminho (roteamento).</li>
                <li><strong>Camada 2 - Enlace:</strong> Endereçamento físico (MAC) e controle de acesso ao meio físico.</li>
                <li><strong>Camada 1 - Física:</strong> Transmissão dos bits através do meio (cabos, fibra, ondas de rádio).</li>
            </ol>
        `
    },
    'introducao_redes_12': {
        title: 'O Papel dos Servidores',
        content: `
            <h3>Servidores Comuns em uma Infraestrutura</h3>
            <p>Um servidor é um computador ou software dedicado a fornecer serviços para outros computadores, conhecidos como clientes. Alguns tipos essenciais são:</p>
            <ul>
                <li><strong>Servidor de Arquivos:</strong> Armazena e gerencia o acesso a arquivos de forma centralizada (Ex: Samba/NFS).</li>
                <li><strong>Servidor Web:</strong> Hospeda sites e aplicações acessíveis via navegador (Ex: Apache, Nginx).</li>
                <li><strong>Servidor de E-mail:</strong> Gerencia todo o fluxo de correio eletrônico (Ex: Postfix, Exchange).</li>
                <li><strong>Servidor DNS:</strong> Fornece o serviço de resolução de nomes de domínio para a rede.</li>
                <li><strong>Servidor DHCP:</strong> Automatiza a distribuição de endereços IP e outras configurações de rede.</li>
            </ul>
        `
    },
    'introducao_redes_13': {
        title: 'VPN: Seu Túnel Seguro',
        content: `
            <h3>VPN: Navegação Segura e Privada</h3>
            <p>Uma VPN (Virtual Private Network) é uma tecnologia que estabelece uma conexão segura e criptografada sobre uma rede pública, como a internet. Ela cria um "túnel" privado virtual que protege seus dados contra interceptação e espionagem.</p>
            <h4>Principais Aplicações:</h4>
            <ul>
                <li><strong>Acesso Remoto Corporativo:</strong> Permite que funcionários acessem a rede da empresa de forma segura de qualquer lugar.</li>
                <li><strong>Proteção em Redes Públicas:</strong> Garante a segurança dos seus dados ao usar redes Wi-Fi de aeroportos, hotéis e cafés.</li>
                <li><strong>Privacidade Online:</strong> Mascara seu endereço IP real, protegendo sua identidade e localização.</li>
            </ul>
        `
    },
    'introducao_redes_14': {
        title: 'DMZ: A Zona de Segurança',
        content: `
            <h3>DMZ: A Zona Desmilitarizada da Rede</h3>
            <p>Em segurança de redes, uma DMZ (Demilitarized Zone) é uma sub-rede de perímetro que fica isolada entre a sua rede interna confiável (LAN) e a rede externa não confiável (Internet). Seu propósito é adicionar uma camada extra de proteção.</p>
            <p>Servidores que precisam de acesso público, como servidores web, de e-mail ou DNS, são posicionados na DMZ. Dessa forma, se um desses servidores for comprometido, o ataque fica contido na DMZ, sem acesso direto à rede interna crítica, que é protegida por um segundo firewall.</p>
        `
    },
    'introducao_redes_15': {
        title: 'Proxy: O Intermediário Inteligente',
        content: `
            <h3>O que é um Servidor Proxy?</h3>
            <p>Um servidor proxy atua como um intermediário entre os dispositivos da sua rede e a internet. Em vez de se conectar diretamente a um site, sua requisição passa primeiro pelo proxy, que então a encaminha ao destino.</p>
            <h4>Principais Funções:</h4>
            <ul>
                <li><strong>Filtragem de Conteúdo:</strong> Usado por empresas para controlar o acesso a sites e serviços, aumentando a produtividade e a segurança.</li>
                <li><strong>Cache:</strong> Armazena cópias de páginas e arquivos acessados com frequência para acelerar o acesso para outros usuários e economizar banda.</li>
                <li><strong>Segurança e Privacidade:</strong> Oculta os endereços IP dos clientes, adicionando uma camada de anonimato.</li>
            </ul>
        `
    },
    'introducao_redes_16': {
        title: 'Acesso Remoto: SSH vs. Telnet',
        content: `
            <h3>Gerenciamento à Distância</h3>
            <p>Tanto SSH quanto Telnet são protocolos para acessar e gerenciar dispositivos de rede (roteadores, switches, servidores) remotamente via linha de comando. A diferença entre eles é crucial para a segurança.</p>
            <ul>
                <li><strong>Telnet:</strong> Um protocolo antigo que transmite todos os dados, incluindo credenciais de login, em <strong>texto puro</strong>. É extremamente vulnerável a interceptações e seu uso é obsoleto e perigoso.</li>
                <li><strong>SSH (Secure Shell):</strong> O padrão atual para acesso remoto seguro. Ele <strong>criptografa</strong> toda a comunicação, garantindo a confidencialidade e a integridade dos dados trocados. Sempre opte pelo SSH.</li>
            </ul>
        `
    },
    'introducao_redes_17': {
        title: 'Firewall: O Guardião Digital',
        content: `
            <h3>A Barreira de Proteção da Sua Rede</h3>
            <p>Um firewall é um dispositivo ou software de segurança que monitora e controla o tráfego de rede com base em um conjunto de regras. Ele atua como um porteiro entre sua rede interna confiável e redes externas não confiáveis, como a internet.</p>
            <p>Sua função é ser a primeira linha de defesa, bloqueando acessos não autorizados, prevenindo ataques e garantindo que apenas o tráfego legítimo possa entrar ou sair da rede. É um componente indispensável em qualquer estratégia de segurança.</p>
        `
    },
    'introducao_redes_18': {
        title: 'Entendendo o CGNAT',
        content: `
            <h3>O que é CGNAT?</h3>
            <p>CGNAT (Carrier-Grade NAT) é uma técnica de NAT em larga escala usada por provedores de internet (ISPs) para contornar a escassez de endereços IPv4. Com o CGNAT, o provedor compartilha um único endereço IP público entre centenas ou até milhares de clientes simultaneamente.</p>
            <p>Para o usuário final, isso significa que o endereço IP na porta WAN do seu roteador é, na verdade, um IP privado (geralmente na faixa <code>100.64.0.0/10</code>). Embora transparente para a navegação comum, o CGNAT pode complicar o uso de aplicações que dependem de conexões de entrada, como jogos online, acesso remoto a câmeras ou hospedagem de servidores.</p>
        `
    },
    'introducao_redes_19': {
        title: 'Ping: O Teste de Conexão',
        content: `
            <h3>Verificando a Conectividade Essencial</h3>
            <p>O comando <code>ping</code> é a ferramenta de diagnóstico mais básica e essencial em redes. Ele utiliza o protocolo ICMP para enviar um pacote de "solicitação de eco" a um destino e aguardar por uma "resposta de eco".</p>
            <p>Com ele, podemos verificar rapidamente três aspectos fundamentais:</p>
            <ul>
                <li><strong>Alcançabilidade:</strong> Confirma se o dispositivo de destino está ativo e acessível na rede.</li>
                <li><strong>Latência:</strong> Mede o tempo de ida e volta da comunicação (round-trip time), geralmente em milissegundos (ms).</li>
                <li><strong>Perda de Pacotes:</strong> Indica se algum pacote se perdeu durante o trajeto.</li>
            </ul>
            <pre><code>ping 8.8.8.8</code></pre>
        `
    },
    'introducao_redes_20': {
        title: 'Modos de Roteador: Router vs. Bridge',
        content: `
            <h3>Modos de Operação do Roteador</h3>
            <p>A maioria dos roteadores domésticos pode operar em dois modos distintos:</p>
            <p><strong>Modo Roteador (Padrão):</strong> Nesta configuração, o dispositivo atua como um roteador completo. Ele gerencia a conexão WAN (internet), cria uma rede local (LAN) separada, distribui IPs via DHCP, e realiza o NAT para permitir o acesso à internet.</p>
            <p><strong>Modo Bridge / Access Point:</strong> Neste modo, as funções de roteamento (NAT, DHCP) são desativadas. O aparelho funciona como uma extensão da rede existente, agindo como um "switch com Wi-Fi". É a escolha ideal quando você deseja usar um segundo roteador apenas para ampliar a cobertura do sinal sem criar uma nova rede conflitante.</p>
        `
    },
    'introducao_redes_21': {
        title: 'A Arte de Crimpar Cabos',
        content: `
            <h3>Padrões de Crimpagem T568A e T568B</h3>
            <p>Crimpar um cabo de rede significa fixar um conector RJ-45 na ponta de um cabo de par trançado (UTP). Para que a conexão funcione, os pares de fios coloridos devem ser inseridos em uma ordem específica. Existem dois padrões principais:</p>
            <ul>
                <li><strong>T568B:</strong> É o padrão mais comum globalmente e no Brasil. A sequência de cores é: Branco/Laranja, Laranja, Branco/Verde, Azul, Branco/Azul, Verde, Branco/Marrom, Marrom.</li>
                <li><strong>T568A:</strong> A sequência troca os pares verde e laranja de lugar: Branco/Verde, Verde, Branco/Laranja, Azul, Branco/Azul, Laranja, Branco/Marrom, Marrom.</li>
            </ul>
            <p>Para um <strong>cabo direto</strong> (ligar um PC a um switch), use o mesmo padrão nas duas pontas (geralmente T568B). Para um <strong>cabo cruzado (crossover)</strong> (ligar dispositivos iguais, como PC-PC), use T568A em uma ponta e T568B na outra. Atualmente, a maioria dos equipamentos modernos possui a função Auto-MDIX, que detecta e se ajusta ao tipo de cabo automaticamente.</p>
        `
    },
    'eve_ng_1': {
        title: 'Instalando o EVE-NG',
        content: `
            <h3>Preparando Seu Laboratório Virtual</h3>
            <p>O EVE-NG (Emulated Virtual Environment - Next Generation) é uma plataforma de emulação de redes que nos permite criar topologias complexas com equipamentos virtuais de diversos fabricantes. É a ferramenta ideal para praticar sem a necessidade de hardware físico caro.</p>
            <h4>Passos da Instalação:</h4>
            <ol>
                <li>Faça o download da imagem do EVE-NG Community Edition do site oficial. Normalmente, ela é distribuída no formato OVA.</li>
                <li>Você precisará de um software de virtualização, como o VMware Workstation Player (gratuito) ou VirtualBox.</li>
                <li>No seu software de virtualização, use a opção de importar ("Import Appliance") e selecione o arquivo OVA baixado.</li>
                <li>Siga o assistente de importação. É fundamental que seu computador possua recursos suficientes (recomenda-se no mínimo 8GB de RAM e 4 núcleos de CPU) e que a virtualização de hardware (VT-x/AMD-V) esteja habilitada na BIOS.</li>
            </ol>
        `
    },
    'eve_ng_2': {
        title: 'Primeiros Passos e Soluções',
        content: `
            <h3>Primeiro Acesso e Configuração</h3>
            <p>Após importar a VM, inicie-a. A tela do console exibirá o endereço IP que o EVE-NG obteve da sua rede local.</p>
            <ol>
                <li>Baixe e instale o PuTTY, um cliente SSH para Windows.</li>
                <li>Abra o PuTTY, digite o endereço IP do EVE-NG, verifique se a porta é 22 e a conexão é SSH, e clique em "Open".</li>
                <li>O login padrão é <strong>root</strong> com a senha <strong>eve</strong>. No primeiro acesso, um script de configuração será executado para que você defina uma nova senha, fuso horário, etc.</li>
                <li><strong>Solução de Problemas Comuns:</strong> Se os dispositivos (nós) no seu laboratório não iniciarem, o problema mais comum é a falta de "virtualização aninhada". Desligue a VM do EVE-NG, acesse suas configurações, vá para a seção de CPU e habilite a opção "Virtualize Intel VT-x/EPT or AMD-V/RVI".</li>
            </ol>
        `
    },
    'eve_ng_3': {
        title: 'Adicionando o Mikrotik ao Lab',
        content: `
            <h3>Adicionando Imagens de Dispositivos</h3>
            <p>O EVE-NG é uma plataforma vazia; precisamos adicionar as imagens dos sistemas operacionais de rede. Para adicionar o Mikrotik CHR (Cloud Hosted Router):</p>
            <ol>
                <li>No site da Mikrotik, baixe a imagem do CHR no formato "qcow2".</li>
                <li>Use um cliente SFTP como o WinSCP para se conectar ao EVE-NG (use o IP, usuário 'root' e sua nova senha).</li>
                <li>Navegue até o diretório <code>/opt/unetlab/addons/qemu/</code>.</li>
                <li>Crie uma nova pasta seguindo o padrão de nomenclatura, por exemplo: <code>mikrotik-7.15</code>.</li>
                <li>Envie o arquivo <code>.qcow2</code> para dentro desta nova pasta.</li>
                <li>Renomeie o arquivo de imagem para <code>hda.qcow2</code>.</li>
                <li>Finalmente, execute o comando de correção de permissões no terminal do EVE-NG (via PuTTY): <code>/opt/unetlab/wrappers/unl_wrapper -a fixpermissions</code>.</li>
            </ol>
            <p>Após esses passos, o Mikrotik aparecerá na lista de nós disponíveis para adicionar ao seu laboratório.</p>
        `
    },
    'eve_ng_4': {
        title: 'Acesso com Winbox e Erros Comuns',
        content: `
            <h3>Solução de Problemas e Conexão</h3>
            <p><strong>Problemas comuns ao adicionar imagens:</strong></p>
            <ul>
                <li><strong>Nomenclatura incorreta:</strong> Siga rigorosamente a convenção de nomes do EVE-NG. O arquivo de disco principal deve se chamar <code>hda.qcow2</code>.</li>
                <li><strong>Permissões:</strong> Lembre-se de sempre executar o comando <code>fixpermissions</code> após adicionar ou modificar imagens.</li>
            </ul>
            <p><strong>Conectando com o Winbox:</strong></p>
            <p>Para que o Winbox (no seu PC) se conecte a um Mikrotik virtual dentro do EVE-NG, você precisa criar uma ponte entre o laboratório e sua rede física.</p>
            <ol>
                <li>No laboratório, adicione um nó do tipo "Network".</li>
                <li>Nas configurações deste nó, selecione o tipo "Management (Cloud0)". Isso cria uma ponte para a interface de rede do seu próprio computador.</li>
                <li>Conecte um cabo virtual da porta <code>ether1</code> do seu Mikrotik a este nó "Cloud".</li>
                <li>Inicie o Mikrotik. Agora ele estará na mesma rede que seu PC e poderá ser descoberto pelo Winbox através da aba "Neighbors" (via endereço MAC).</li>
            </ol>
        `
    },
    'mikrotik_1_1': {
        title: 'Introdução ao RouterOS',
        content: `
            <h3>O que é Mikrotik?</h3>
            <p>Mikrotik é uma empresa europeia (Letônia) que desenvolve software e hardware de rede. Seu produto mais famoso é o <strong>RouterOS</strong>, um sistema operacional versátil que transforma hardware dedicado (as RouterBOARDS) ou até mesmo um computador padrão em um roteador de nível profissional com funcionalidades de firewall, VPN, controle de banda, e muito mais. Devido ao seu excelente custo-benefício e flexibilidade, é amplamente utilizado por provedores de internet (ISPs) e empresas de todos os portes.</p>
        `
    },
    'mikrotik_1_2': {
        title: 'Interfaces de Gerenciamento',
        content: `
            <h3>Formas de Acesso ao RouterOS</h3>
            <p>Existem múltiplas maneiras de configurar e gerenciar um dispositivo com RouterOS:</p>
            <ul>
                <li><strong>Winbox:</strong> A ferramenta gráfica oficial para Windows. É a forma mais popular e intuitiva de gerenciamento, permitindo conexão via IP ou endereço MAC.</li>
                <li><strong>WebFig:</strong> Uma interface web completa, acessível digitando o endereço IP do dispositivo em um navegador.</li>
                <li><strong>CLI (Command Line Interface):</strong> Acesso via terminal (SSH/Telnet), oferecendo poder máximo para automação, scripts e configurações avançadas.</li>
                <li><strong>API:</strong> Permite a integração com sistemas e aplicações externas para gerenciamento automatizado.</li>
            </ul>
        `
    },
    'mikrotik_1_3': {
        title: 'Configurando Endereços IP',
        content: `
            <h3>Atribuindo um Endereço IP</h3>
            <p>Para que o roteador participe da rede, suas interfaces precisam de endereços IP. No RouterOS, um endereço IP é sempre configurado em uma interface específica e utiliza a notação CIDR para definir a máscara de sub-rede (ex: 192.168.1.1/24).</p>
            <h4>Via Winbox:</h4>
            <p>Navegue até <code>IP > Addresses</code>, clique no botão de adição (+), e preencha o campo "Address" (ex: <code>192.168.88.1/24</code>) e selecione a "Interface" (ex: <code>ether2</code>) onde o IP será aplicado.</p>
            <h4>Via CLI:</h4>
            <pre><code>/ip address add address=192.168.88.1/24 interface=ether2</code></pre>
        `
    },
    'mikrotik_1_4': {
        title: 'Gerenciamento de Usuários e Senhas',
        content: `
            <h3>Segurança Básica de Acesso</h3>
            <p>A primeira ação em qualquer dispositivo Mikrotik novo é fortalecer a segurança de acesso.</p>
            <h4>Alterar a Senha do Admin:</h4>
            <p>O usuário padrão 'admin' não possui senha. É imperativo definir uma senha complexa imediatamente.</p>
            <pre><code># Via CLI
/password
# Siga as instruções para definir a nova senha.</code></pre>
            <h4>Criar Novos Usuários:</h4>
            <p>É uma boa prática criar usuários distintos com diferentes níveis de permissão (ex: um usuário com acesso total e outro com acesso somente leitura para monitoramento).</p>
            <pre><code># Criando um usuário com acesso total (full)
/user add name=gerente group=full password=SenhaForte123

# Criando um usuário para monitoramento (read-only)
/user add name=monitor group=read password=OutraSenha456</code></pre>
        `
    },
    'mikrotik_1_5': {
        title: 'Sincronizando o Horário com NTP',
        content: `
            <h3>Ajustando o Relógio do Sistema</h3>
            <p>Manter o horário do roteador sincronizado é crucial para a precisão dos logs, agendamentos e a validação de certificados de segurança. O RouterOS pode atuar como um cliente NTP (Network Time Protocol) para sincronizar com servidores de tempo globais.</p>
            <h4>Via Winbox:</h4>
            <ol>
                <li>Acesse <code>System > Clock</code> e configure o "Time Zone Name" para sua localização (ex: America/Sao_Paulo).</li>
                <li>Acesse <code>System > NTP Client</code>.</li>
                <li>Marque a caixa "Enabled".</li>
                <li>Informe os servidores NTP nos campos designados, como <code>a.ntp.br</code>.</li>
            </ol>
            <h4>Via CLI:</h4>
            <pre><code>/system clock set time-zone-name=America/Sao_Paulo
/system ntp client set enabled=yes primary-ntp=a.ntp.br secondary-ntp=b.ntp.br</code></pre>
        `
    },
    'mikrotik_1_6': {
        title: 'Atualização e Downgrade do Sistema',
        content: `
            <h3>Mantendo o RouterOS em Dia</h3>
            <p>Manter o sistema operacional atualizado é vital para obter novas funcionalidades, melhorias de desempenho e, principalmente, correções de vulnerabilidades de segurança.</p>
            <h4>Upgrade:</h4>
            <ol>
                <li>No Winbox, vá para <code>System > Packages</code> e clique em "Check For Updates".</li>
                <li>O sistema exibirá a versão atual e a mais recente. Clique em "Download&Install" para que o roteador baixe o pacote e reinicie para aplicar a atualização.</li>
            </ol>
            <h4>Downgrade:</h4>
            <p>Caso uma nova versão apresente instabilidade, é possível reverter para a anterior.</p>
            <ol>
                <li>No site da Mikrotik, baixe o arquivo ".npk" da versão desejada na seção de arquivos (archive).</li>
                <li>Arraste o arquivo <code>.npk</code> para a janela <code>Files</code> no Winbox.</li>
                <li>Vá em <code>System > Packages</code> e clique em "Downgrade". O dispositivo irá reiniciar e instalar a versão contida no arquivo.</li>
            </ol>
        `
    },
    'mikrotik_1_7': {
        title: 'Estratégias de Backup',
        content: `
            <h3>Salvando Suas Configurações</h3>
            <p>O RouterOS oferece duas formas principais para salvar suas configurações, cada uma com um propósito diferente:</p>
            <h4>1. Backup Binário (.backup):</h4>
            <ul>
                <li>Gerado através de <code>Files > Backup</code> no Winbox ou com o comando <code>/system backup save</code>.</li>
                <li>Salva a configuração completa, incluindo senhas e chaves secretas.</li>
                <li><strong>Prós:</strong> Restauração extremamente rápida e completa.</li>
                <li><strong>Contras:</strong> Só pode ser restaurado no <strong>mesmo modelo de hardware</strong> e na <strong>mesma versão (ou superior)</strong> do RouterOS. O arquivo não é legível.</li>
            </ul>
            <h4>2. Exportação de Script (.rsc):</h4>
            <ul>
                <li>Gerado com o comando <code>/export file=nome_do_arquivo</code> no terminal.</li>
                <li>Cria um arquivo de texto com os comandos CLI para recriar a configuração.</li>
                <li><strong>Prós:</strong> Arquivo de texto legível e editável. Portátil entre diferentes modelos e versões do RouterOS.</li>
                <li><strong>Contras:</strong> Não salva senhas de usuários ou outros dados sensíveis.</li>
            </ul>
        `
    },
    'mikrotik_1_8': {
        title: 'Automatizando Backups',
        content: `
            <h3>Agendando a Segurança</h3>
            <p>Automatizar a criação de backups é uma prática de segurança fundamental. No RouterOS, isso é feito combinando as ferramentas de Script e Scheduler.</p>
            <ol>
                <li><strong>Criar o Script de Backup:</strong>
                   <p>Em <code>System > Scripts</code>, crie um novo script. No campo "Source", insira um comando para gerar o backup com um nome único, usando variáveis de data e hora:</p>
                   <pre><code>:local sysname [/system identity get name]
:local date [/system clock get date]
/system backup save name="$sysname-$date"</code></pre>
                </li>
                <li><strong>Agendar a Execução:</strong>
                   <p>Em <code>System > Scheduler</code>, crie um novo agendamento. Defina um intervalo (ex: <code>1d</code> para rodar diariamente) e no campo "On Event", digite o nome do script que você criou. </p>
                </li>
            </ol>
            <p>Com isso, o Mikrotik irá gerar um novo arquivo de backup automaticamente todos os dias.</p>
        `
    },
    'mikrotik_1_9': {
        title: 'Enviando Backups por E-mail',
        content: `
            <h3>Backup Externo por E-mail</h3>
            <p>Manter os backups apenas no dispositivo não é uma estratégia segura. Uma forma prática de externalizá-los é configurando o envio automático por e-mail.</p>
            <ol>
                <li><strong>Configurar o Servidor de E-mail:</strong>
                   <p>Em <code>Tools > Email</code>, insira os dados do seu servidor SMTP (como o do Gmail, por exemplo). Você precisará do endereço do servidor, porta, e suas credenciais de login. Use o botão "Send Email" para validar a configuração.</p>
                </li>
                <li><strong>Atualizar o Script de Backup:</strong>
                   <p>Adicione ao final do seu script de backup o comando para enviar o arquivo gerado:</p>
                   <pre><code>:local backupfile ("$sysname-$date" . ".backup")
/tool e-mail send to="seu_email@dominio.com" subject="Backup Diário - $sysname" file=$backupfile</code></pre>
                </li>
            </ol>
            <p>Agora, após cada backup, um e-mail com o arquivo em anexo será enviado para seu endereço.</p>
        `
    },
    'mikrotik_1_10': {
        title: 'DHCP: Cliente e Servidor',
        content: `
            <h3>Automação de Endereçamento IP</h3>
            <p>O DHCP (Dynamic Host Configuration Protocol) é o protocolo que automatiza a atribuição de endereços IP em uma rede.</p>
            <h4>DHCP Cliente:</h4>
            <p>Configurado na interface que se conecta à internet (WAN), o Mikrotik atua como um cliente para <strong>receber</strong> um endereço IP do seu provedor.</p>
            <pre><code>/ip dhcp-client add interface=ether1 disabled=no</code></pre>
            <h4>DHCP Servidor:</h4>
            <p>Configurado na interface da sua rede local (LAN), o Mikrotik atua como um servidor para <strong>distribuir</strong> endereços IP para os computadores, smartphones e outros dispositivos conectados.</p>
            <p>A maneira mais fácil de configurar é através do assistente "DHCP Setup" em <code>IP > DHCP Server</code>, que guia você por todo o processo.</p>
        `
    },
    'mikrotik_1_11': {
        title: 'Unificando Portas com Bridge',
        content: `
            <h3>Transformando Portas em um Switch</h3>
            <p>Uma Bridge no RouterOS é uma interface virtual que agrupa múltiplas interfaces físicas (como <code>ether2</code>, <code>ether3</code>, <code>wlan1</code>), fazendo-as funcionar como uma única interface de Camada 2. Na prática, ela transforma um conjunto de portas do seu roteador em um switch unificado.</p>
            <p>Isso é essencial para criar uma rede local coesa. Você cria a bridge, adiciona as portas desejadas a ela, e então aplica as configurações de IP e DHCP diretamente na interface da bridge, e não nas portas físicas individuais.</p>
            <pre><code># Criando a bridge e adicionando portas via CLI
/interface bridge add name=bridge-lan
/interface bridge port add bridge=bridge-lan interface=ether2
/interface bridge port add bridge=bridge-lan interface=wlan1</code></pre>
        `
    },
    'mikrotik_1_12': {
        title: 'Rotas Estáticas e VPNs',
        content: `
            <h3>Conectando Redes Distintas</h3>
            <h4>VPN (Virtual Private Network):</h4>
            <p>O RouterOS é extremamente capaz em VPNs, suportando múltiplos protocolos como PPTP, L2TP/IPsec, OpenVPN e WireGuard. A VPN estabelece um "túnel" criptografado pela internet, permitindo que você se conecte à sua rede de forma segura de qualquer lugar do mundo.</p>
            <h4>Roteamento Estático:</h4>
            <p>O roteamento estático é a forma manual de ensinar ao roteador como alcançar redes que não estão diretamente conectadas a ele. Você define explicitamente: "Para chegar à rede de destino X, envie o tráfego para o gateway Y".</p>
            <pre><code># Exemplo: Rota para a rede da filial (10.20.30.0/24) através de um gateway
/ip route add dst-address=10.20.30.0/24 gateway=192.168.1.254</code></pre>
        `
    },
    'mikrotik_1_13': {
        title: 'Descobrindo Dispositivos Vizinhos',
        content: `
            <h3>Mapeando a Vizinhança</h3>
            <p>A ferramenta Neighbor Discovery (acessível em <code>IP > Neighbors</code>) é um recurso que permite ao Mikrotik descobrir outros dispositivos na mesma rede física (mesmo domínio de broadcast) que utilizam protocolos de descoberta, como o MNDP (Mikrotik) ou CDP (Cisco).</p>
            <p>Ela exibe informações valiosas como endereço MAC, IP, modelo e versão do software do vizinho. É extremamente útil para mapear a rede e para realizar o primeiro acesso a um dispositivo via Winbox (clicando no endereço MAC) antes mesmo que ele tenha um IP configurado.</p>
        `
    },
    'mikrotik_1_14': {
        title: 'Controle de Banda (QoS)',
        content: `
            <h3>Gerenciando a Largura de Banda com Simple Queues</h3>
            <p>Uma das funcionalidades mais aclamadas do RouterOS é seu robusto sistema de Qualidade de Serviço (QoS). A forma mais direta de limitar a velocidade de download e upload para um IP específico é através das "Simple Queues".</p>
            <p>Em <code>Queues > Simple Queues</code>, crie uma nova regra. Os campos essenciais são:</p>
            <ul>
                <li><strong>Name:</strong> Um nome descritivo para a regra (ex: "PC-Secretaria").</li>
                <li><strong>Target:</strong> O endereço IP do dispositivo a ser limitado (ex: <code>192.168.88.10</code>).</li>
                <li><strong>Max Limit (Upload/Download):</strong> A velocidade máxima permitida (ex: <code>2M/10M</code> para 2 Mbps de upload e 10 Mbps de download).</li>
            </ul>
            <pre><code># Exemplo via CLI
/queue simple add name=PC-Secretaria target=192.168.88.10 max-limit=2M/10M</code></pre>
        `
    },
    'mikrotik_1_15': {
        title: 'Redirecionamento de Portas (NAT)',
        content: `
            <h3>Publicando Serviços Internos</h3>
            <p>O redirecionamento de portas, conhecido como NAT de Destino (Dst-Nat), é o mecanismo que permite que o tráfego vindo da internet alcance um serviço específico (como um servidor web ou uma câmera de segurança) dentro da sua rede local.</p>
            <p>Para permitir o acesso a um servidor web interno no IP <code>192.168.88.100</code>, você criaria uma regra em <code>IP > Firewall > NAT</code> com as seguintes características:</p>
            <ul>
                <li><strong>Chain:</strong> <code>dstnat</code></li>
                <li><strong>Protocol:</strong> <code>tcp</code> e <strong>Dst. Port:</strong> <code>80,443</code></li>
                <li><strong>In. Interface:</strong> Sua interface de internet (ex: <code>ether1</code>)</li>
                <li>Na aba <strong>Action</strong>: <strong>Action:</strong> <code>dst-nat</code>, <strong>To Addresses:</strong> <code>192.168.88.100</code></li>
            </ul>
            <p>Essa regra instrui o roteador a encaminhar todo o tráfego web que chega da internet para o seu servidor interno.</p>
        `
    },
    'mikrotik_1_16': {
        title: 'Firewall: Regras Essenciais',
        content: `
            <h3>Protegendo Seu Roteador e Sua Rede</h3>
            <p>Um firewall bem configurado é a base da segurança. A estratégia inicial deve ser proteger o acesso ao próprio roteador (a "input chain") e o tráfego que o atravessa (a "forward chain"). A abordagem recomendada é "negar tudo e permitir o necessário".</p>
            <h4>Regras Essenciais para a Chain 'Input':</h4>
            <ol>
                <li>Permitir tráfego de conexões já estabelecidas e relacionadas (essencial para o funcionamento da internet).</li>
                <li>Permitir o acesso de gerenciamento (Winbox, SSH) vindo apenas da sua rede interna confiável.</li>
                <li>Bloquear (drop) todas as outras tentativas de conexão vindas da internet.</li>
            </ol>
            <pre><code># Exemplo de regras de input via CLI
/ip firewall filter
add chain=input action=accept connection-state=established,related comment="Aceita conexoes estabelecidas"
add chain=input action=accept src-address-list=rede-local in-interface=bridge-lan comment="Permite acesso da LAN"
add chain=input action=drop in-interface=ether1 comment="Bloqueia todo o resto da internet"</code></pre>
        `
    },
    'mikrotik_1_17': {
        title: 'Monitoramento com SNMP',
        content: `
            <h3>Coletando Dados de Desempenho</h3>
            <p>SNMP (Simple Network Management Protocol) é o protocolo padrão da indústria para monitorar dispositivos de rede. Ele permite que sistemas de monitoramento (como Zabbix, Grafana, PRTG) coletem métricas vitais de seus equipamentos, como uso de CPU, memória, tráfego de interface e temperatura.</p>
            <p>Para habilitar o SNMP no RouterOS, acesse <code>IP > SNMP</code>. Marque a caixa "Enabled". O passo mais importante é configurar uma "Community" (que atua como uma senha) com permissões de apenas leitura (Read Only) e, por segurança, restringir o acesso apenas ao endereço IP do seu servidor de monitoramento no campo "Addresses".</p>
        `
    },
    'mikrotik_1_18': {
        title: 'A Importância de Documentar',
        content: `
            <h3>Deixando Comentários para o Futuro</h3>
            <p>Uma das melhores práticas em administração de redes é documentar suas configurações. O RouterOS facilita isso permitindo que você adicione um comentário a praticamente qualquer item: uma regra de firewall, uma rota, uma interface, uma fila, etc.</p>
            <p>No Winbox, a maioria das janelas possui um botão "Comment". Na CLI, você pode usar o parâmetro <code>comment="Sua anotação aqui"</code> ao criar um item, ou adicioná-lo posteriormente com o comando <code>set [find ...] comment="..."</code>. Use este recurso para explicar o "porquê" de cada configuração. Seu "eu" do futuro (e seus colegas de equipe) agradecerão.</p>
        `
    },
    'mikrotik_1_19': {
        title: 'Analisando Uso de CPU',
        content: `
            <h3>Monitorando a Saúde do Dispositivo</h3>
            <p>É crucial monitorar o desempenho do seu roteador para garantir a estabilidade da rede. Uma visão geral rápida está disponível em <code>System > Resources</code>, que exibe o uso de CPU, memória e tempo de atividade.</p>
            <p>Se você notar um uso de CPU consistentemente alto, a ferramenta <strong>Profiler</strong> (acessível em <code>Tools > Profile</code>) é indispensável. Ela detalha em tempo real qual processo específico do sistema está consumindo mais recursos, ajudando a diagnosticar a causa raiz do problema, que pode ser uma regra de firewall ineficiente, um loop de roteamento, ou outra configuração inadequada.</p>
        `
    },
    'mikrotik_1_20': {
        title: 'Configuração Padrão para Clientes',
        content: `
            <h3>Checklist: Do Zero à Navegação</h3>
            <p>Este é um guia rápido e consolidado para configurar um Mikrotik para um cliente residencial ou de pequeno porte, garantindo funcionalidade e segurança.</p>
            <ol>
                <li><strong>Resetar Configurações:</strong> Comece com uma base limpa (<code>System > Reset Configuration</code>, com a opção "No Default Configuration").</li>
                <li><strong>Segurança Inicial:</strong> Defina uma senha forte para o usuário 'admin' (<code>System > Password</code>).</li>
                <li><strong>Configurar WAN:</strong> Configure a porta da internet (<code>ether1</code>) como cliente DHCP (<code>IP > DHCP Client</code>).</li>
                <li><strong>Criar LAN Unificada:</strong> Crie uma bridge e adicione as portas LAN e WLAN a ela (<code>Bridge</code>).</li>
                <li><strong>Endereçar a LAN:</strong> Atribua um endereço IP à interface da bridge (ex: <code>192.168.1.1/24</code> em <code>IP > Addresses</code>).</li>
                <li><strong>Servidor DHCP para LAN:</strong> Configure um servidor DHCP na bridge para distribuir IPs aos dispositivos (<code>IP > DHCP Server > DHCP Setup</code>).</li>
                <li><strong>Habilitar NAT:</strong> Crie uma regra de NAT (masquerade) para que os dispositivos da LAN possam acessar a internet (<code>IP > Firewall > NAT</code>).</li>
                <li><strong>Configurar Wi-Fi:</strong> Defina o nome da rede (SSID) e a segurança (WPA2) na interface wireless.</li>
                <li><strong>Firewall Básico:</strong> Aplique regras de firewall essenciais para proteger o roteador.</li>
            </ol>
        `
    },
    'mikrotik_2_1': {
        title: 'Túneis EoIP: Estendendo a Camada 2',
        content: `<h3>Construindo Pontes Virtuais</h3><p>O túnel EoIP (Ethernet over IP) é um protocolo da Mikrotik que permite criar uma ponte de Camada 2 entre dois roteadores através de uma rede de Camada 3 (como a internet). Na prática, ele permite que você estenda sua rede local para um local remoto, como se estivessem conectados pelo mesmo switch. É útil para cenários onde você precisa unificar redes em diferentes filiais.</p>`
    },
    'mikrotik_2_2': {
        title: 'OSPF: Roteamento Dinâmico - Parte 1',
        content: `<h3>Introdução ao OSPF</h3><p>OSPF (Open Shortest Path First) é um protocolo de roteamento dinâmico do tipo link-state, ideal para redes de médio e grande porte. Diferente das rotas estáticas, o OSPF permite que os roteadores descubram a topologia da rede e calculem o melhor caminho para cada destino automaticamente, se adaptando a falhas de link de forma rápida e eficiente.</p>`
    },
    'mikrotik_2_3': {
        title: 'OSPF: Roteamento Dinâmico - Parte 2',
        content: `<h3>Aprofundando no OSPF</h3><p>Nesta aula, exploramos conceitos mais avançados do OSPF, como a divisão da rede em áreas para melhorar a escalabilidade, os diferentes tipos de LSAs (Link-State Advertisements) que os roteadores trocam, e como otimizar a convergência da rede ajustando os timers e os custos das interfaces.</p>`
    },
    'mikrotik_2_4': {
        title: 'VPN Segura com L2TP/IPsec',
        content: `<h3>VPN para Acesso Remoto de Clientes</h3><p>Enquanto VPNs site-to-site conectam redes, VPNs de acesso remoto permitem que usuários individuais (em notebooks, smartphones) se conectem à rede da empresa de forma segura. O L2TP (Layer 2 Tunneling Protocol) combinado com IPsec é uma solução robusta e amplamente compatível para este fim, oferecendo um túnel criptografado para o tráfego do cliente.</p>`
    },
    'mikrotik_2_5': {
        title: 'Análise de Tráfego com Torch',
        content: `<h3>Monitoramento em Tempo Real</h3><p>O Torch é uma ferramenta poderosa do RouterOS para análise de tráfego em tempo real. Ele permite que você visualize as conexões que estão passando por uma interface, mostrando o endereço de origem, destino, portas utilizadas e a taxa de transferência de cada fluxo de dados. É uma ferramenta indispensável para diagnosticar problemas de lentidão e identificar o consumo de banda na rede.</p>`
    },
    'mikrotik_2_6': {
        title: 'Segmentação de Rede com VLANs',
        content: `<h3>Criando Redes Virtuais</h3><p>VLANs (Virtual LANs) permitem segmentar uma rede física em múltiplas redes lógicas independentes. No Mikrotik, isso é configurado na bridge. Você pode, por exemplo, criar uma VLAN para o departamento de TI, outra para o Financeiro e uma terceira para visitantes, isolando o tráfego entre elas e aumentando a segurança e a organização da rede, mesmo que todos estejam conectados ao mesmo switch.</p>`
    },
    'mikrotik_2_7': {
        title: 'Failover de Link com Netwatch',
        content: `<h3>Garantindo a Redundância</h3><p>O Netwatch é uma ferramenta que monitora a disponibilidade de um host na rede (geralmente pingando-o). Sua grande vantagem é a capacidade de executar scripts automaticamente quando o status do host muda (de online para offline, e vice-versa). Isso o torna perfeito para criar um sistema de failover de link de internet: o Netwatch monitora o gateway do link principal e, se ele falhar, executa um script para ativar a rota do link de backup.</p>`
    },
    'mikrotik_2_8': {
        title: 'Recuperando RouterBOARDS com Netinstall',
        content: `<h3>Reinstalação do Sistema</h3><p>O Netinstall é a ferramenta oficial da Mikrotik para reinstalar o RouterOS do zero. É o último recurso para recuperar uma RouterBOARD que não inicializa, está com o sistema corrompido ou cuja senha de acesso foi perdida. O processo envolve conectar o dispositivo diretamente ao computador e usar o Netinstall para enviar uma nova imagem de software via rede.</p>`
    },
    'bgp_1': {
        title: 'Como a Internet Realmente Funciona',
        content: `<h3>A Rede das Redes</h3><p>A internet não é uma entidade única, mas sim uma vasta "rede de redes". Cada uma dessas redes (de um provedor, de uma grande empresa, etc.) é chamada de Sistema Autônomo (AS - Autonomous System). O BGP (Border Gateway Protocol) é o protocolo que permite que esses Sistemas Autônomos troquem informações sobre quais redes eles conseguem alcançar, formando o mapa global de roteamento da internet.</p>`
    },
    'bgp_2': {
        title: 'Ecossistema: PTT, CDN e NIC.br',
        content: `<h3>Peças-Chave do Ecossistema da Internet</h3><p>Nesta aula, desvendamos termos cruciais para quem trabalha com provedores: <strong>PTT (Ponto de Troca de Tráfego)</strong>, locais onde diferentes ASes se conectam para trocar tráfego diretamente; <strong>CDN (Content Delivery Network)</strong>, redes que distribuem conteúdo popular para mais perto do usuário final; e o papel do <strong>NIC.br</strong>, a entidade que gerencia a alocação de IPs e ASNs no Brasil.</p>`
    },
    'bgp_3': {
        title: 'Explorando o Menu BGP no RouterOS',
        content: `<h3>Visão Geral da Configuração BGP</h3><p>Vamos explorar as seções principais do menu BGP no RouterOS para entender onde cada peça se encaixa. As abas mais importantes são: <strong>Instances</strong> (onde se define a configuração geral do seu AS), <strong>Peers</strong> (onde se configuram as sessões com outros ASes), e <strong>Networks</strong> (onde se define quais prefixos de rede o seu AS irá anunciar para o mundo).</p>`
    },
    'bgp_4': {
        title: 'Estabelecendo a Primeira Sessão BGP',
        content: `<h3>Conectando-se a Outro AS</h3><p>Uma sessão BGP, ou "peer", é a conexão estabelecida entre dois roteadores de Sistemas Autônomos diferentes para a troca de informações de roteamento. Nesta aula, configuramos passo a passo uma sessão BGP, definindo o AS remoto, os endereços IP da conexão e as políticas de importação e exportação de rotas.</p>`
    },
    'bgp_5': {
        title: 'Filtragem de Rotas: Boas Práticas',
        content: `<h3>Controlando o Fluxo de Rotas</h3><p>Anunciar ou aceitar rotas incorretas via BGP pode causar grandes problemas na internet (vazamentos de rotas). Por isso, é fundamental criar filtros (route filters) para controlar precisamente quais prefixos de rede você anuncia para seus vizinhos e quais prefixos você aceita deles. Essa é uma medida de segurança e estabilidade indispensável para qualquer operador de rede que usa BGP.</p>`
    },
    'linux_1': {
        title: 'Introdução ao Mundo Linux',
        content: `<h3>O Sistema Operacional dos Servidores</h3><p>Linux é um sistema operacional de código aberto que domina o mundo dos servidores, da nuvem e dos dispositivos embarcados. Nesta aula, discutimos o que é o Linux, a diferença entre o kernel e uma distribuição (como Debian, Ubuntu, CentOS), e por que sua estabilidade, segurança e flexibilidade o tornam a escolha preferida para a infraestrutura da internet.</p>`
    },
    'linux_2': {
        title: 'Instalando um Servidor Linux',
        content: `<h3>Guia de Instalação</h3><p>Um guia prático e passo a passo para instalar uma distribuição Linux focada em servidores, como o Debian. Abordamos o processo de particionamento de disco, configuração de rede inicial, seleção de pacotes e a criação do primeiro usuário.</p>`
    },
    'linux_3': {
        title: 'Comandos Essenciais do Terminal',
        content: `<h3>Dominando a Linha de Comando</h3><p>A verdadeira força do Linux está no seu terminal. Nesta aula, aprendemos os comandos essenciais que todo analista de redes e administrador de sistemas deve conhecer, incluindo navegação no sistema de arquivos (<code>ls</code>, <code>cd</code>, <code>pwd</code>), manipulação de arquivos (<code>cp</code>, <code>mv</code>, <code>rm</code>), verificação de rede (<code>ip a</code>, <code>ping</code>) e edição de texto (<code>nano</code>).</p>`
    },
    'linux_4': {
        title: 'Aumentando a Segurança do SSH',
        content: `<h3>Protegendo o Acesso Remoto</h3><p>Uma das primeiras medidas de segurança em qualquer servidor Linux é "endurecer" a configuração do serviço SSH. Abordamos práticas essenciais como desabilitar o login do usuário root e, principalmente, alterar a porta padrão do SSH (22) para uma porta alta não-padrão. Isso reduz drasticamente a exposição a ataques automatizados de força bruta.</p>`
    },
    'linux_5': {
        title: 'Monitoramento com Zabbix',
        content: `<h3>Instalando o Servidor Zabbix</h3><p>Zabbix é uma das ferramentas de monitoramento de código aberto mais poderosas e completas do mercado. Nesta aula, seguimos um guia detalhado para instalar o servidor Zabbix em uma máquina Linux, preparando o ambiente para começar a monitorar toda a nossa infraestrutura de rede.</p>`
    },
    'linux_6': {
        title: 'Dashboards com Grafana',
        content: `<h3>Visualizando Seus Dados</h3><p>Enquanto o Zabbix é excelente para coletar e armazenar dados, o Grafana é a ferramenta líder para visualizá-los. Mostramos como instalar o Grafana e integrá-lo ao Zabbix como uma fonte de dados (datasource), permitindo a criação de dashboards modernos, informativos e visualmente atraentes para suas métricas de rede.</p>`
    },
    'linux_7': {
        title: 'Integrando Zabbix e Grafana',
        content: `<h3>Do Dado ao Gráfico</h3><p>Com as ferramentas instaladas, é hora de colocá-las para trabalhar. Nesta aula prática, mostramos como adicionar um novo dispositivo (host) para ser monitorado pelo Zabbix via SNMP e, em seguida, como criar um painel no Grafana para exibir uma métrica específica (como o tráfego de uma interface) em um gráfico em tempo real.</p>`
    },
    'linux_8': {
        title: 'Traduzindo a Interface do Zabbix',
        content: `<h3>Localização da Interface</h3><p>Uma dica rápida de usabilidade: mostramos como instalar os pacotes de idioma necessários no servidor Linux e como alterar a configuração de perfil de usuário no Zabbix para que toda a interface web seja exibida em Português do Brasil.</p>`
    },
    'linux_9': {
        title: 'Recuperação de Senha do Zabbix',
        content: `<h3>Procedimento de Recuperação</h3><p>Perder a senha de administrador do Zabbix pode ser um grande problema. Demonstramos o procedimento de recuperação, que envolve acessar o banco de dados do Zabbix diretamente no servidor para resetar a senha do usuário 'Admin'.</p>`
    },
    'linux_10': {
        title: 'Implementando um DNS Recursivo',
        content: `<h3>Otimizando a Resolução de Nomes</h3><p>Configurar um servidor DNS recursivo local (usando softwares como BIND9 ou Unbound) para sua rede pode trazer grandes benefícios. Ele acelera a resolução de nomes através de cache local, aumenta a segurança ao centralizar as consultas e dá a você mais controle sobre o tráfego DNS da sua infraestrutura.</p>`
    },
    'firewall_1': {
        title: 'Estratégias de Firewall Corporativo',
        content: `<h3>Defendendo o Perímetro da Rede</h3><p>Esta aula aborda estratégias de firewall para ambientes empresariais. Discutimos a importância da política de "negação padrão" (deny by default), a criação de regras explícitas para liberar apenas os serviços necessários, a configuração de NAT de destino para servidores internos e a importância crítica de registrar (logar) o tráfego para auditoria e análise de segurança.</p>`
    },
    'provedor_1': {
        title: 'LAB: Roteamento Interno com OSPF',
        content: `<h3>Construindo o Core do Provedor</h3><p>Iniciamos a construção da topologia de um pequeno provedor de internet (WISP) no EVE-NG. O primeiro passo é configurar a rede interna, interligando os roteadores de borda, o roteador do core e os roteadores de concentração (OLTs/switches) com o protocolo OSPF para garantir que todos os equipamentos internos consigam se comunicar de forma dinâmica e resiliente.</p>`
    },
    'provedor_2': {
        title: 'Autenticação de Clientes com PPPoE',
        content: `<h3>Conectando e Gerenciando Clientes</h3><p>O PPPoE (Point-to-Point Protocol over Ethernet) é o método mais comum para autenticar clientes em redes de provedores. Configuramos um servidor PPPoE no roteador de borda para que os clientes possam "discar" e receber um endereço IP. Também configuramos o NAT de origem (Source NAT), que funciona de forma similar ao CGNAT, para permitir que os clientes com IPs privados naveguem na internet.</p>`
    },
    'provedor_3': {
        title: 'Instalando o MK-Auth no EVE-NG',
        content: `<h3>Adicionando o Sistema de Gerenciamento</h3><p>Para gerenciar clientes, planos e faturamento, os provedores utilizam sistemas de gerenciamento como o MK-Auth. Nesta aula, mostramos como adicionar uma máquina virtual Linux ao EVE-NG e instalar o sistema MK-Auth, preparando o terreno para a integração com nossa rede.</p>`
    },
    'provedor_4': {
        title: 'Solucionando a Instalação do MK-Auth',
        content: `<h3>Resolvendo Problemas Comuns</h3><p>Esta aula é dedicada a resolver os problemas e erros mais comuns que podem ocorrer durante a instalação e a configuração inicial do MK-Auth, garantindo que o sistema esteja funcional e pronto para ser integrado à rede.</p>`
    },
    'provedor_5': {
        title: 'Integração Radius com MK-Auth',
        content: `<h3>Autenticação Centralizada</h3><p>A mágica acontece quando integramos o servidor PPPoE do Mikrotik com o MK-Auth usando o protocolo Radius. Com essa integração, o Mikrotik passa a consultar o MK-Auth para verificar o usuário e a senha de cada cliente que tenta se conectar, permitindo o gerenciamento centralizado de autenticação, autorização e contabilização (AAA).</p>`
    },
    'huawei_1': {
        title: 'Adicionando Imagem Huawei no EVE-NG',
        content: `<h3>Praticando com Equipamentos de Grande Porte</h3><p>Para expandir nossos horizontes, mostramos o processo de como obter e instalar a imagem de um roteador de grande porte, como o Huawei NE-40, no EVE-NG. Isso permite que os alunos pratiquem com a linha de comando e as configurações de um fabricante diferente, muito presente no core de grandes operadoras.</p>`
    },
    'semana_1': {
        title: 'Revisão Intensiva - Aula 1',
        content: `<h3>Revisão Focada para o Mercado</h3><p>Uma aula intensiva que revisa os fundamentos mais críticos de redes, com foco nos conceitos que são frequentemente cobrados em entrevistas e exigidos no dia a dia de um analista de redes, preparando o aluno para os desafios do mundo real.</p>`
    },
    'semana_2': {
        title: 'Revisão Intensiva - Aula 2',
        content: `<h3>Foco em Switching e Roteamento</h3><p>Esta aula de revisão é focada em switching e roteamento. Abordamos cenários práticos de configuração de VLANs, Spanning Tree, rotas estáticas e OSPF, consolidando o conhecimento em Camada 2 e Camada 3.</p>`
    },
    'semana_3': {
        title: 'Revisão Intensiva - Aula 3',
        content: `<h3>Segurança e Serviços Essenciais</h3><p>Nesta aula, mergulhamos em segurança de redes e nos serviços que fazem a rede funcionar. Revisamos a criação de regras de firewall eficazes e a configuração e diagnóstico de serviços vitais como DHCP e DNS.</p>`
    },
    'semana_4': {
        title: 'Atualização: Mikrotik no EVE-NG',
        content: `<h3>Instalação Atualizada do Mikrotik CHR</h3><p>Uma aula bônus e atualizada, mostrando o método mais recente e otimizado para baixar e instalar a imagem do Mikrotik Cloud Hosted Router (CHR) no EVE-NG, garantindo que os alunos estejam usando as versões mais novas.</p>`
    },
    'extras_1': {
        title: 'Estudo de Caso: Ataque DDoS',
        content: `<h3>Analisando um Ataque na Prática</h3><p>Um estudo de caso prático e descontraído que demonstra o que é um ataque de Negação de Serviço Distribuído (DDoS). Exploramos como ele funciona, como dispositivos do dia a dia (IoT) podem ser cooptados para uma botnet e quais são as primeiras medidas de mitigação.</p>`
    },
    'extras_2': {
        title: 'Bloqueando Sites via Arquivo Hosts',
        content: `<h3>Controle Local de Resolução de Nomes</h3><p>Mostramos como editar o arquivo 'hosts' do sistema operacional (Windows, Linux ou macOS) para forçar a resolução de um domínio para um IP específico (como 127.0.0.1). É uma técnica simples e eficaz para bloquear o acesso a determinados sites em um computador local, útil para controle parental ou para aumentar o foco durante o trabalho.</p>`
    },
    'cidr_calculator': {
      title: 'Calculadora CIDR',
      content: `<p>Use esta ferramenta para calcular todos os detalhes de uma rede a partir de um endereço IP e seu prefixo CIDR (ex: 192.168.1.0/24).</p>`
    }
};