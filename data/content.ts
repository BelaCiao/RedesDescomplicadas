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
    'ip': {
        title: 'Endereçamento IP (Internet Protocol)',
        content: `
            <h3>O que é?</h3>
            <p>O Endereço de Protocolo de Internet (<span class="term" data-term="ip">IP</span>) é um rótulo numérico único atribuído a cada dispositivo conectado a uma rede de computadores que utiliza o Protocolo de Internet para comunicação. Sua principal função é permitir a identificação e localização dos dispositivos na rede.</p>
            <h3>Como Funciona?</h3>
            <p>Pense nele como o endereço de uma casa. Assim como o carteiro precisa de um endereço para entregar uma carta, os roteadores na internet precisam de um endereço IP para entregar pacotes de dados ao destino correto.</p>
            <ul>
                <li><strong>IPv4:</strong> A versão mais comum, com 32 bits, escrita como quatro números de 0 a 255 separados por pontos (ex: 192.168.1.1).</li>
                <li><strong>IPv6:</strong> Uma versão mais nova, com 128 bits, criada para resolver a escassez de endereços IPv4.</li>
            </ul>
            <h4>Máscara de Sub-rede</h4>
            <p>A máscara de sub-rede (ex: 255.255.255.0) trabalha junto com o IP para definir qual parte do endereço identifica a rede e qual parte identifica o dispositivo específico (host) dentro dessa rede.</p>
        `
    },
    'ip_static': {
        title: 'IP Estático',
        content: `
            <h3>O que é?</h3>
            <p>Um endereço IP estático é um endereço fixo, que não muda. Ele é configurado manualmente em um dispositivo de rede pelo administrador.</p>
            <h3>Como Funciona?</h3>
            <p>Em vez de o dispositivo pedir um endereço a um servidor <span class="term" data-term="dhcp">DHCP</span>, o administrador insere diretamente nas configurações de rede do dispositivo o endereço IP, a máscara de sub-rede, o <span class="term" data-term="gateway">Gateway</span> Padrão e os servidores <span class="term" data-term="dns">DNS</span>.</p>
            <h4>Quando usar?</h4>
            <ul>
                <li><strong>Servidores:</strong> Para que os clientes sempre saibam onde encontrar o servidor (web, email, jogos).</li>
                <li><strong>Impressoras de Rede:</strong> Para que os computadores sempre saibam como enviar trabalhos de impressão.</li>
                <li><strong>Dispositivos de Acesso Remoto:</strong> Facilita a conexão a um dispositivo específico de fora da rede.</li>
            </ul>
            <p><strong>Analogia:</strong> Um IP estático é como o endereço de uma loja ou de um serviço público. Ele precisa ser fixo e conhecido por todos para que as pessoas possam encontrá-lo facilmente. Um IP dinâmico é como o número de um quarto de hotel, que muda a cada vez que você se hospeda.</p>
        `
    },
    'mac': {
        title: 'Endereço MAC',
        content: `
            <h3>O que é?</h3>
            <p>O endereço <span class="term" data-term="mac">MAC</span> (Media Access Control) é um identificador único atribuído a uma placa de rede (como Wi-Fi ou Ethernet) pelo fabricante. É um endereço físico, gravado no hardware.</p>
            <h3>Como Funciona?</h3>
            <p>Ele opera na Camada 2 (Enlace) do modelo OSI e é usado para a comunicação entre dispositivos na mesma rede local (mesmo segmento). Switches usam endereços MAC para encaminhar quadros (frames) para a porta correta.</p>
            <ul>
                <li><strong>Formato:</strong> É um número hexadecimal de 48 bits, geralmente escrito como seis pares de caracteres separados por dois pontos ou hífens (ex: 00:1A:2B:3C:4D:5E).</li>
                <li><strong>IP vs. MAC:</strong> O endereço <span class="term" data-term="ip">IP</span> te localiza na internet (endereço de cidade/rua), enquanto o endereço <span class="term" data-term="mac">MAC</span> te identifica na sua vizinhança imediata (endereço da sua casa específica naquela rua).</li>
            </ul>
        `
    },
    'gateway': {
        title: 'Gateway Padrão',
        content: `
            <h3>O que é?</h3>
            <p>O <span class="term" data-term="gateway">Gateway</span> Padrão (Default Gateway) é o dispositivo em uma rede, geralmente um roteador, que serve como a "porta de saída" para todas as outras redes, incluindo a internet.</p>
            <h3>Como Funciona?</h3>
            <p>Quando seu computador quer enviar dados para um dispositivo fora da sua rede local (por exemplo, para acessar um site), ele não sabe o caminho. Então, ele envia o pacote para o Gateway Padrão. O gateway, por sua vez, sabe como encaminhar esse pacote para a internet.</p>
            <p>Sem um gateway configurado, seus dispositivos só poderiam se comunicar com outros dispositivos na mesma rede local.</p>
            <p><strong>Analogia:</strong> Imagine sua casa como sua rede local. Para enviar uma carta para outra cidade (outra rede), você não a joga pela janela. Você a entrega ao carteiro ou a coloca na caixa de correio (o gateway), que é o responsável por iniciar o processo de envio para fora do seu bairro.</p>
        `
    },
    'tcp': {
        title: 'TCP (Transmission Control Protocol)',
        content: `
            <h3>O que é?</h3>
            <p>O <span class="term" data-term="tcp">TCP</span> é um dos principais protocolos da internet. Ele funciona na Camada 4 (Transporte) e garante uma comunicação confiável, ordenada e com verificação de erros entre aplicações.</p>
            <h3>Como Funciona?</h3>
            <p>O TCP é "orientado à conexão", o que significa que ele estabelece uma conexão antes de enviar os dados. Isso é feito através de um processo chamado "Three-Way Handshake":</p>
            <ol>
                <li><strong>SYN:</strong> O cliente envia um pacote "SYN" (sincronizar) para o servidor para iniciar uma conexão.</li>
                <li><strong>SYN-ACK:</strong> O servidor responde com um pacote "SYN-ACK" (sincronizar-reconhecer) para confirmar que recebeu o pedido.</li>
                <li><strong>ACK:</strong> O cliente responde com um "ACK" (reconhecer), e a conexão é estabelecida.</li>
            </ol>
            <p>Após a conexão, o TCP divide os dados em segmentos, numera-os e os envia. O receptor confirma o recebimento de cada segmento. Se algum se perder, ele é reenviado. É usado para emails, downloads de arquivos e navegação na web, onde a integridade dos dados é crucial.</p>
        `
    },
    'dhcp': {
        title: 'DHCP (Dynamic Host Configuration Protocol)',
        content: `
            <h3>O que é?</h3>
            <p>O <span class="term" data-term="dhcp">DHCP</span> é um protocolo que automatiza a atribuição de endereços <span class="term" data-term="ip">IP</span> e outras configurações de rede (como máscara de sub-rede, <span class="term" data-term="gateway">gateway</span> e <span class="term" data-term="dns">DNS</span>) para os dispositivos em uma rede.</p>
            <h3>Como Funciona?</h3>
            <p>Ele elimina a necessidade de configurar cada dispositivo manualmente. O processo, conhecido como DORA, ocorre em quatro passos:</p>
            <ul>
                <li><strong>Discover:</strong> O dispositivo cliente, ao entrar na rede, envia uma mensagem de broadcast perguntando "Existe algum servidor DHCP aí?".</li>
                <li><strong>Offer:</strong> Servidores DHCP na rede respondem com uma oferta de um endereço IP.</li>
                <li><strong>Request:</strong> O cliente escolhe uma das ofertas e envia uma requisição, pedindo para usar aquele endereço IP.</li>
                <li><strong>Acknowledge:</strong> O servidor finaliza o processo com um reconhecimento (ACK), confirmando a concessão do endereço por um determinado período de tempo (lease).</li>
            </ul>
        `
    },
    'dns': {
        title: 'DNS (Domain Name System)',
        content: `
            <h3>O que é?</h3>
            <p>O <span class="term" data-term="dns">DNS</span> é frequentemente chamado de "lista telefônica da internet". Sua função é traduzir nomes de domínio fáceis de lembrar (como www.google.com) para os endereços <span class="term" data-term="ip">IP</span> numéricos (como 172.217.28.14) que os computadores usam para se comunicar.</p>
            <h3>Como Funciona?</h3>
            <p>Quando você digita um endereço de site no seu navegador:</p>
            <ol>
                <li>Seu computador pergunta ao servidor DNS (geralmente fornecido pelo seu provedor de internet): "Qual é o IP de www.google.com?".</li>
                <li>O servidor DNS procura em seus registros ou pergunta a outros servidores DNS até encontrar a resposta.</li>
                <li>O servidor DNS retorna o endereço IP para o seu computador.</li>
                <li>Seu navegador usa esse IP para se conectar ao servidor do site e carregar a página.</li>
            </ol>
            <p>Sem o DNS, teríamos que memorizar os endereços IP de todos os sites que queremos visitar.</p>
        `
    },
    'http': {
        title: 'HTTP (Hypertext Transfer Protocol)',
        content: `
            <h3>O que é?</h3>
            <p>HTTP é o protocolo fundamental da World Wide Web. É a base da comunicação de dados na internet, definindo como as mensagens são formatadas e transmitidas entre os navegadores (clientes) e os servidores web.</p>
            <h3>Como Funciona?</h3>
            <p>Ele segue um modelo de requisição-resposta. O cliente (seu navegador) envia uma requisição HTTP para o servidor (onde o site está hospedado). Exemplos de requisições incluem:</p>
            <ul>
                <li><strong>GET:</strong> Solicita a busca de um recurso (como uma página HTML ou uma imagem).</li>
                <li><strong>POST:</strong> Envia dados para o servidor para serem processados (como preencher um formulário de login).</li>
            </ul>
            <p>O servidor processa a requisição e envia de volta uma resposta HTTP, que contém o status da requisição (ex: "200 OK" ou "404 Not Found") e o conteúdo solicitado.</p>
            <h4>HTTPS</h4>
            <p>HTTPS é a versão segura do HTTP. Ele adiciona uma camada de criptografia (SSL/TLS) para proteger os dados trocados, essencial para transações bancárias, logins e qualquer comunicação sensível.</p>
        `
    },
    'vlan': {
        title: 'VLAN (Virtual LAN)',
        content: `
            <h3>O que é?</h3>
            <p>Uma <span class="term" data-term="vlan">VLAN</span> (Rede Local Virtual) é uma forma de dividir logicamente uma rede física em múltiplas redes de broadcast separadas. Dispositivos na mesma VLAN se comunicam como se estivessem no mesmo switch, mesmo que estejam fisicamente conectados a switches diferentes.</p>
            <h3>Como Funciona?</h3>
            <p>Em um switch gerenciável, as portas são atribuídas a IDs de VLAN específicos. O tráfego de uma VLAN é isolado das outras. Para que o tráfego de múltiplas VLANs possa passar por um único cabo entre switches (um link "trunk"), os pacotes são "etiquetados" (tagged) com seu ID de VLAN. O switch de destino lê a etiqueta e encaminha o pacote apenas para as portas daquela VLAN.</p>
            <h4>Benefícios:</h4>
            <ul>
                <li><strong>Segurança:</strong> Isola grupos de usuários (ex: Finanças e Vendas) mesmo que estejam na mesma rede física.</li>
                <li><strong>Performance:</strong> Reduz o domínio de broadcast, diminuindo tráfego desnecessário na rede.</li>
                <li><strong>Flexibilidade:</strong> Permite agrupar usuários por departamento, não por localização física.</li>
            </ul>
        `
    },
    'vpn': {
        title: 'VPN (Virtual Private Network)',
        content: `
            <h3>O que é?</h3>
            <p>Uma VPN (Rede Privada Virtual) cria uma conexão segura e criptografada sobre uma rede pública, como a internet. Ela age como um "túnel" seguro para proteger seus dados de interceptação.</p>
            <h3>Como Funciona?</h3>
            <p>Quando você se conecta a uma VPN, seu tráfego de internet é redirecionado através de um servidor remoto operado pelo provedor de VPN. A conexão entre seu dispositivo e o servidor é criptografada. Isso tem dois efeitos principais:</p>
            <ol>
                <li><strong>Segurança:</strong> A criptografia impede que hackers, seu provedor de internet ou governos espionem seus dados, mesmo que você esteja usando uma rede Wi-Fi pública e insegura.</li>
                <li><strong>Privacidade e Acesso:</strong> Seu endereço IP real é ocultado e substituído pelo IP do servidor VPN. Isso permite contornar restrições geográficas de conteúdo e aumenta seu anonimato online.</li>
            </ol>
            <p><strong>Analogia:</strong> Usar a internet sem VPN é como enviar um cartão postal; qualquer um no caminho pode ler. Usar uma VPN é como enviar esse mesmo cartão dentro de um cofre-forte blindado.</p>
        `
    },
    'snmp': {
        title: 'SNMP (Simple Network Management Protocol)',
        content: `
            <h3>O que é?</h3>
            <p>SNMP é um protocolo padrão da internet usado para gerenciar e monitorar dispositivos em uma rede. Ele permite que administradores de rede monitorem a saúde da rede, gerenciem dispositivos e identifiquem problemas.</p>
            <h3>Como Funciona?</h3>
            <p>A arquitetura SNMP é composta por três componentes principais:</p>
            <ul>
                <li><strong>Gerente (Manager):</strong> Um sistema central (geralmente um servidor) que monitora a rede.</li>
                <li><strong>Agente (Agent):</strong> Um software que roda em cada dispositivo gerenciado (roteadores, switches, servidores) e coleta informações.</li>
                <li><strong>MIB (Management Information Base):</strong> Um banco de dados no agente que organiza as informações do dispositivo. O gerente pode ler ou alterar essas informações.</li>
            </ul>
            <p>O gerente pode "perguntar" (GET) ao agente sobre o status de um dispositivo (ex: "Qual o uso da CPU?") ou o agente pode enviar alertas proativamente (TRAPs) ao gerente se algo anormal acontecer (ex: uma porta caiu).</p>
        `
    },
    'cidr': {
        title: 'CIDR (Classless Inter-Domain Routing)',
        content: `
            <h3>O que é?</h3>
            <p>CIDR, ou Roteamento Interdomínio sem Classes, é o método moderno para alocar endereços IP e especificar máscaras de sub-rede. Ele substituiu o antigo sistema de "classes" de redes (A, B, C), que era muito inflexível e desperdiçava endereços.</p>
            <h3>Como Funciona?</h3>
            <p>O CIDR usa a "notação de barra" para representar a máscara de sub-rede. Um endereço IP é seguido por uma barra (/) e um número. Esse número indica quantos bits do endereço são a parte da rede.</p>
            <ul>
                <li><strong>Exemplo:</strong> <code>192.168.1.0/24</code></li>
                <li><code>192.168.1.0</code> é o endereço da rede.</li>
                <li><code>/24</code> significa que os primeiros 24 bits são para a rede. Isso corresponde a uma máscara de sub-rede de <code>255.255.255.0</code>.</li>
            </ul>
            <p>Essa notação permite a criação de sub-redes de tamanhos muito mais variados e específicos, otimizando o uso do espaço de endereçamento IP. Por exemplo, uma rede <code>/30</code> permite apenas 2 hosts, ideal para um link ponto-a-ponto.</p>
        `
    },
    'pppoe': {
        title: 'PPPoE (Point-to-Point Protocol over Ethernet)',
        content: `
            <h3>O que é?</h3>
            <p>PPPoE é um protocolo de rede que encapsula o PPP (Point-to-Point Protocol) dentro de quadros Ethernet. É amplamente utilizado por provedores de internet (ISPs) para conectar clientes de banda larga (como DSL e fibra) à internet.</p>
            <h3>Como Funciona?</h3>
            <p>Ele permite que uma única conexão física (o cabo Ethernet) seja usada para estabelecer múltiplas sessões lógicas. O principal uso é para autenticação, medição e gerenciamento de contas de usuários.</p>
            <ol>
                <li><strong>Descoberta (Discovery):</strong> O roteador do cliente (PPPoE Client) envia uma mensagem de broadcast para encontrar o servidor do provedor (PPPoE Server, ou Access Concentrator).</li>
                <li><strong>Sessão (Session):</strong> Após a descoberta, uma sessão PPP é estabelecida. O cliente envia um nome de usuário e senha para autenticação.</li>
                <li><strong>Conexão:</strong> Se a autenticação for bem-sucedida, o servidor do provedor atribui um endereço IP público ao cliente, permitindo o acesso à internet.</li>
            </ol>
            <p><strong>Analogia:</strong> Pense no PPPoE como a "chamada de login" para a internet. Seu roteador disca para o provedor, fornece suas credenciais e, se tudo estiver correto, o provedor abre o portão para você navegar.</p>
        `
    },
    'zabbix': {
        title: 'Monitoramento de Redes Críticas com Zabbix',
        content: `
            <svg width="100%" viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" style="background-color: #161f2d; border-radius: 8px; margin-bottom: 1.5rem;">
              <style>
                .line { stroke: #3a4c66; stroke-width: 2; }
                .node-bg { fill: var(--bg-light); stroke: var(--border-color); stroke-width: 2; }
                .node-text { font-family: 'Inter', sans-serif; font-size: 14px; fill: var(--text-secondary); text-anchor: middle; }
                .status-ok { fill: #28a745; }
                .status-warn { fill: #ffc107; }
                .status-crit { fill: #dc3545; }
                .console-text { font-family: 'Inter', sans-serif; font-size: 18px; fill: var(--accent-color); font-weight: 600; text-anchor: middle; }
                .glow-crit { animation: pulse 1.5s infinite; }
                @keyframes pulse { 0% { r: 6; opacity: 1; } 50% { r: 10; opacity: 0.5; } 100% { r: 6; opacity: 1; } }
              </style>
              <rect x="350" y="20" width="100" height="60" rx="8" class="node-bg" />
              <text x="400" y="55" class="console-text">NOC</text>
              <text x="400" y="75" class="node-text">(Zabbix)</text>
              <line x1="400" y1="80" x2="100" y2="150" class="line" />
              <line x1="400" y1="80" x2="250" y2="150" class="line" />
              <line x1="400" y1="80" x2="400" y2="150" class="line" />
              <line x1="400" y1="80" x2="550" y2="150" class="line" />
              <line x1="400" y1="80" x2="700" y2="150" class="line" />
              <rect x="60" y="150" width="80" height="50" rx="5" class="node-bg" /><text x="100" y="175" class="node-text">Router-SP</text><circle cx="100" cy="210" r="6" class="status-ok" />
              <rect x="210" y="150" width="80" height="50" rx="5" class="node-bg" /><text x="250" y="175" class="node-text">Switch-Core</text><circle cx="250" cy="210" r="6" class="status-warn" />
              <rect x="360" y="150" width="80" height="50" rx="5" class="node-bg" /><text x="400" y="175" class="node-text">DB-Server</text><circle cx="400" cy="210" r="6" class="status-crit glow-crit" />
              <rect x="510" y="150" width="80" height="50" rx="5" class="node-bg" /><text x="550" y="175" class="node-text">Firewall</text><circle cx="550" cy="210" r="6" class="status-ok" />
              <rect x="660" y="150" width="80" height="50" rx="5" class="node-bg" /><text x="700" y="175" class="node-text">AP-Corp</text><circle cx="700" cy="210" r="6" class="status-ok" />
            </svg>

            <h3>O que é Zabbix?</h3>
            <p>Zabbix é uma das mais poderosas ferramentas de monitoramento de código aberto do mercado. Ele é capaz de monitorar praticamente qualquer coisa: performance e disponibilidade de servidores, dispositivos de rede, serviços, e até mesmo métricas de negócio. Em ambientes críticos, onde cada segundo de indisponibilidade pode custar caro, o Zabbix se torna uma peça central da operação de TI.</p>
            
            <h3>Conceitos Fundamentais</h3>
            <p>Para dominar o Zabbix, é crucial entender seus componentes básicos:</p>
            <ul>
                <li><strong>Hosts:</strong> Qualquer dispositivo que você deseja monitorar (um servidor, roteador, switch, impressora, etc.).</li>
                <li><strong>Itens (Items):</strong> Uma métrica específica que você coleta de um host. Por exemplo: uso de CPU, tráfego de uma interface de rede, ou a temperatura de um servidor.</li>
                <li><strong>Triggers:</strong> Expressões lógicas que avaliam os dados coletados pelos Itens. Um trigger define um limiar de problema. Exemplo: "O uso da CPU do 'Servidor-WEB' está acima de 90% nos últimos 5 minutos". Quando essa condição é verdadeira, o trigger é ativado.</li>
                <li><strong>Ações (Actions):</strong> Respostas automáticas a eventos, como a ativação de um trigger. Uma ação pode ser enviar um email, uma mensagem no Slack, executar um script para tentar resolver o problema, ou escalar o alerta para outro time.</li>
                <li><strong>Templates:</strong> Modelos que agrupam Itens, Triggers e outros elementos. Em vez de configurar tudo para cada host, você pode criar um template "Servidor Linux" e aplicá-lo a todos os seus servidores, economizando um tempo imenso.</li>
            </ul>

            <h3>Monitorando Ambientes Críticos</h3>
            <p>Em redes de missão crítica (como data centers, sistemas bancários, e telecomunicações), o monitoramento não é reativo, é preditivo e proativo. O objetivo é identificar problemas antes que eles impactem os usuários.</p>
            <h4>Métricas Essenciais:</h4>
            <ul>
                <li><strong>Disponibilidade:</strong> O dispositivo está online? (Ping, SNMP checks).</li>
                <li><strong>Performance de Links:</strong> Latência, jitter e perda de pacotes em links WAN.</li>
                <li><strong>Saúde de Hardware:</strong> Uso de CPU, memória, temperatura e status de fontes/ventoinhas em equipamentos chave como roteadores core e firewalls.</li>
                <li><strong>Tráfego e Erros:</strong> Utilização de banda, erros de CRC e descartes em interfaces críticas.</li>
            </ul>

            <h3>Garantindo Resposta Instantânea da Equipe de Campo</h3>
            <p>A meta de ter uma equipe respondendo a um alerta crítico em menos de 10 minutos (e idealmente, quase instantaneamente) não depende apenas da velocidade das pessoas, mas sim da automação e da clareza do processo. A ferramenta é o gatilho, mas o processo garante a ação.</p>
            <h4>Estratégia para Resposta Rápida:</h4>
            <ol>
                <li><strong>Alertas Inteligentes e Contextualizados:</strong> Configure triggers com severidades diferentes (Informação, Atenção, Alta, Desastre). Evite o "ruído" de alertas de baixa prioridade para que os alertas críticos se destaquem. Um alerta deve dizer claramente qual o impacto do problema.</li>
                <li><strong>Escalonamento Automatizado:</strong> Use as Ações do Zabbix para criar uma cadeia de comando. Se o analista N1 não reconhecer (Acknowledge) um alerta "Desastre" em 2 minutos, a Ação escala automaticamente para o N2. Se o N2 não responder em 5 minutos, escala para o gestor.</li>
                <li><strong>Canais de Notificação Imediatos:</strong> Email é lento. Integre o Zabbix com ferramentas de comunicação instantânea como <strong>Slack, Microsoft Teams, Telegram ou PagerDuty</strong>. Essas ferramentas garantem que o alerta seja visto imediatamente, no celular da equipe de campo.</li>
                <li><strong>Dashboards de NOC (Network Operation Center):</strong> Crie painéis visuais com os principais indicadores da rede. Um "mapa" da rede com cores (verde, amarelo, vermelho) em uma TV grande é a forma mais rápida de um time inteiro entender o status do ambiente.</li>
                <li><strong>Anexar "Runbooks" aos Alertas:</strong> Cada alerta crítico deve vir acompanhado de um link para um procedimento operacional padrão (runbook). Isso elimina a necessidade do técnico pensar "o que eu faço agora?". O procedimento já está documentado, desde os comandos para diagnóstico até quem contatar.</li>
            </ol>
        `
    },
    'cidr_calculator': {
      title: 'Calculadora CIDR',
      content: ''
    },
    // Módulo 1 do Curso
    'course_1_1': {
        title: '1.1: Introdução às Redes Modernas',
        content: `
            <h3>O que é?</h3>
            <p>Uma rede de computadores é um conjunto de dispositivos (como computadores, celulares, servidores) interconectados que trocam informações e compartilham recursos.</p>
            <h4>Analogia</h4>
            <p>Pense em uma cidade. As casas e prédios são os dispositivos finais (hosts). As ruas e avenidas são os meios de transmissão (cabos, Wi-Fi). Os cruzamentos e rotatórias são os dispositivos intermediários (switches e roteadores), que direcionam o tráfego.</p>
            <h4>Detalhes Técnicos</h4>
            <ul>
                <li><strong>Dispositivos Finais (End Devices/Hosts):</strong> Onde a comunicação começa e termina. Exemplos: PC, smartphone, impressora de rede, servidor.</li>
                <li><strong>Dispositivos Intermediários (Intermediary Devices):</strong> Conectam os dispositivos finais e garantem que os dados cheguem ao destino. Exemplos:
                    <ul>
                        <li><strong>Switch:</strong> Conecta dispositivos na mesma rede local (LAN).</li>
                        <li><strong>Roteador:</strong> Conecta diferentes redes entre si (ex: sua casa com a Internet).</li>
                        <li><strong>Access Point (AP):</strong> Permite a conexão de dispositivos sem fio (Wi-Fi).</li>
                    </ul>
                </li>
                <li><strong>Meios de Rede (Network Media):</strong> O caminho físico por onde os dados viajam.
                    <ul>
                        <li><strong>Cabo de Cobre (UTP):</strong> Usa sinais elétricos. Comum em redes locais.</li>
                        <li><strong>Fibra Óptica:</strong> Usa pulsos de luz. Ideal para longas distâncias e altas velocidades (imune a interferência eletromagnética).</li>
                        <li><strong>Sem Fio (Wireless):</strong> Usa ondas de rádio (Wi-Fi, 4G/5G).</li>
                    </ul>
                </li>
            </ul>
            <h4>Exemplo Prático</h4>
            <p>Na sua casa, seu notebook (host) se conecta via Wi-Fi (meio) a um roteador (dispositivo intermediário), que por sua vez se conecta à Internet (outra rede).</p>
        `
    },
    'course_1_2': {
        title: '1.2: Modelos OSI e TCP/IP',
        content: `
            <h3>O que são?</h3>
            <p>São modelos conceituais que dividem o complexo processo de comunicação de rede em camadas menores e mais gerenciáveis. Eles padronizam como os dispositivos devem se comunicar.</p>
            <h4>Analogia</h4>
            <p>Pense no processo de enviar uma carta. Você escreve a carta (Aplicação), coloca em um envelope e escreve o endereço (Rede/Transporte), o carteiro pega a carta e a leva pela rua (Enlace/Física). O processo se inverte na chegada para que a pessoa possa ler.</p>
            <h4>Detalhes Técnicos - Modelo OSI (7 Camadas)</h4>
            <ol start="7" style="list-style-type: decimal-leading-zero; direction: rtl; text-align: left;">
                <li value="7"><strong>Aplicação:</strong> Interface com o usuário (Navegador, E-mail). Protocolos: HTTP, FTP, DNS.</li>
                <li value="6"><strong>Apresentação:</strong> Formatação dos dados, criptografia, compressão.</li>
                <li value="5"><strong>Sessão:</strong> Inicia, gerencia e termina as conversas (sessões) entre aplicações.</li>
                <li value="4"><strong>Transporte:</strong> Garante a entrega ponta a ponta. Segmenta os dados e controla o fluxo. Protocolos: TCP (confiável) e UDP (rápido).</li>
                <li value="3"><strong>Rede:</strong> Endereçamento lógico (endereço IP) e roteamento (encontrar o melhor caminho entre redes). Dispositivo: Roteador.</li>
                <li value="2"><strong>Enlace de Dados:</strong> Endereçamento físico (endereço MAC) e controle de acesso ao meio. Dispositivo: Switch.</li>
                <li value="1"><strong>Física:</strong> Transmissão dos bits (0s e 1s) através do meio físico (cabos, sinais de rádio).</li>
            </ol>
            <h4>Detalhes Técnicos - Modelo TCP/IP (4 Camadas)</h4>
            <ul>
                <li><strong>Aplicação:</strong> Combina as camadas 5, 6 e 7 do OSI.</li>
                <li><strong>Transporte:</strong> Equivalente à camada 4 do OSI (TCP/UDP).</li>
                <li><strong>Internet:</strong> Equivalente à camada 3 do OSI (IP).</li>
                <li><strong>Acesso à Rede:</strong> Combina as camadas 1 e 2 do OSI.</li>
            </ul>
            <h4>Exemplo Prático</h4>
            <p>Quando você acessa um site, seu navegador (Aplicação) usa o protocolo HTTP. O TCP (Transporte) quebra a solicitação em segmentos. O IP (Rede) adiciona os endereços de origem e destino. O Ethernet (Enlace) coloca tudo em um quadro com endereços MAC. E a camada Física envia os sinais pelo cabo.</p>
        `
    },
    'course_1_3': {
        title: '1.3: Camada Física e Sistemas de Numeração',
        content: `
            <h3>O que é?</h3>
            <p>A Camada Física é responsável por converter os dados digitais (bits) em sinais físicos (elétricos, luminosos ou de rádio) para serem transmitidos pelo meio de rede.</p>
            <h4>Analogia</h4>
            <p>É como a "voz" da rede. Ela não entende o significado das palavras (dados), apenas as pronuncia (transmite os sinais) da forma correta para que o outro lado possa ouvir.</p>
            <h4>Detalhes Técnicos</h4>
            <ul>
                <li><strong>Meios de Transmissão:</strong>
                    <ul>
                        <li><strong>Cabo UTP (Par Trançado Não Blindado):</strong> O mais comum em LANs. Suscetível a interferência eletromagnética (EMI).</li>
                        <li><strong>Fibra Óptica:</strong> Imune a EMI, permite maiores distâncias e velocidades. Usada em backbones e data centers.</li>
                    </ul>
                </li>
                <li><strong>Sistemas de Numeração:</strong> Computadores não entendem letras, apenas números.
                    <ul>
                        <li><strong>Binário (Base 2):</strong> Usa apenas 0 e 1. É a linguagem fundamental dos computadores.</li>
                        <li><strong>Decimal (Base 10):</strong> O sistema que usamos no dia a dia (0 a 9).</li>
                        <li><strong>Hexadecimal (Base 16):</strong> Usa números de 0 a 9 e letras de A a F. É usado para representar endereços MAC e IPv6 de forma mais compacta.</li>
                    </ul>
                </li>
            </ul>
            <h4>Exemplo Prático</h4>
            <p>Um endereço IP como 192.168.1.1 é apenas uma representação decimal para humanos. Para o computador, ele é <code>11000000.10101000.00000001.00000001</code> em binário.</p>
        `
    },
    'course_1_4': {
        title: '1.4: Camada de Enlace de Dados e Endereçamento MAC',
        content: `
            <h3>O que é?</h3>
            <p>A Camada de Enlace (Layer 2) é responsável pela comunicação dentro da mesma rede local. Ela usa o endereço MAC para entregar os dados ao dispositivo correto no mesmo segmento de rede.</p>
            <h4>Analogia</h4>
            <p>Pense no endereço MAC como o número do apartamento em um prédio. O endereço IP é o endereço do prédio. Para entregar uma carta (pacote de dados) dentro do prédio, o carteiro precisa saber o número do apartamento (endereço MAC).</p>
            <h4>Detalhes Técnicos</h4>
            <ul>
                <li><strong>Endereço MAC (Media Access Control):</strong> Um endereço físico de 48 bits, único para cada placa de rede no mundo, gravado de fábrica. Representado em hexadecimal (ex: <code>00:1A:2B:3C:4D:5E</code>).</li>
                <li><strong>Frame (Quadro):</strong> É a "embalagem" que a Camada de Enlace usa para transportar os dados. Um frame Ethernet contém o endereço MAC de origem, o endereço MAC de destino, os dados e uma verificação de erros (FCS).</li>
                <li><strong>Protocolo ARP (Address Resolution Protocol):</strong> Quando um dispositivo conhece o endereço IP de destino mas não sabe o endereço MAC correspondente, ele envia uma mensagem ARP em broadcast (para todos na rede) perguntando: "Quem tem o IP 192.168.1.20?". O dispositivo com esse IP responde com seu endereço MAC.</li>
            </ul>
            <h4>Exemplo Prático</h4>
            <p>Seu PC (IP 192.168.1.10) quer enviar dados para a impressora (IP 192.168.1.20). Ele usa o ARP para descobrir o MAC da impressora. Em seguida, cria um frame com o MAC de destino da impressora e o envia para o switch, que se encarrega de entregar na porta correta.</p>
        `
    },
    // Módulo 2 do Curso
    'course_2_1': {
        title: '2.1: Configuração Básica de Switches Cisco',
        content: `
            <h3>O que é?</h3>
            <p>Esta aula foca em como acessar e configurar um switch Cisco pela primeira vez usando a CLI (Command Line Interface). Um switch é o dispositivo central de uma LAN, responsável por conectar os dispositivos finais e encaminhar o tráfego de forma inteligente.</p>
            <h4>Analogia</h4>
            <p>Pense no switch como o gerente de um andar de um prédio de escritórios. Ele sabe exatamente em qual sala (porta) cada funcionário (dispositivo) está. Quando uma correspondência chega para um funcionário específico, o gerente a entrega diretamente na sala correta, sem incomodar os outros.</p>
            <h4>Detalhes Técnicos - Acesso e Modos de Configuração</h4>
            <ul>
                <li><strong>Acesso via Console:</strong> A primeira configuração é feita conectando um cabo de console do PC diretamente ao switch.</li>
                <li><strong>Modos da CLI:</strong>
                    <ul>
                        <li><strong>Modo de Usuário (<code>Switch></code>):</strong> Acesso inicial, com comandos limitados.</li>
                        <li><strong>Modo Privilegiado (<code>Switch#</code>):</strong> Acesso completo. Comando para entrar: <code>enable</code>.</li>
                        <li><strong>Modo de Configuração Global (<code>Switch(config)#</code>):</strong> Onde as configurações gerais são feitas. Comando: <code>configure terminal</code>.</li>
                        <li><strong>Modos de Configuração Específicos:</strong> Como <code>Switch(config-if)#</code> (interfaces) ou <code>Switch(config-line)#</code> (linhas de acesso).</li>
                    </ul>
                </li>
            </ul>
            <h4>Exemplo de Configuração Prática (Comandos Essenciais)</h4>
            <pre><code>! Entra no modo de configuração global
Switch> enable
Switch# configure terminal

! Define um nome para o switch (hostname)
Switch(config)# hostname SW-ANDAR-1

! Define uma senha para o modo privilegiado (segurança)
SW-ANDAR-1(config)# enable secret cisco123

! Configura uma senha para o acesso via console
SW-ANDAR-1(config)# line console 0
SW-ANDAR-1(config-line)# password senhaconsole
SW-ANDAR-1(config-line)# login

! Configura um IP de gerenciamento para acesso remoto (via Telnet/SSH)
! Switches L2 não têm IP em portas físicas, apenas em interfaces virtuais (SVI)
SW-ANDAR-1(config)# interface vlan 1
SW-ANDAR-1(config-if)# ip address 192.168.1.2 255.255.255.0
SW-ANDAR-1(config-if)# no shutdown

! Salva a configuração
SW-ANDAR-1# copy running-config startup-config</code></pre>
        `
    },
    'course_2_2': {
        title: '2.2: Conceitos Fundamentais de VLANs',
        content: `
            <h3>O que é?</h3>
            <p>Uma VLAN (Virtual LAN) é uma rede local virtual. Ela permite dividir um único switch físico em múltiplos switches virtuais, criando redes logicamente separadas.</p>
            <h4>Analogia</h4>
            <p>Imagine um grande salão de festas (o switch físico). Com as VLANs, você pode usar divisórias para criar várias festas menores e independentes dentro do mesmo salão. Pessoas de uma festa (VLAN 10) não podem interagir com pessoas de outra festa (VLAN 20), a menos que um segurança (roteador) autorize a passagem.</p>
            <h4>Detalhes Técnicos</h4>
            <ul>
                <li><strong>Domínio de Broadcast:</strong> Cada VLAN é um domínio de broadcast separado. Isso significa que uma mensagem de broadcast enviada em uma VLAN só será ouvida pelos dispositivos daquela VLAN, reduzindo o tráfego desnecessário na rede.</li>
                <li><strong>Benefícios:</strong>
                    <ul>
                        <li><strong>Segurança:</strong> Isola o tráfego de diferentes departamentos (ex: RH não vê o tráfego do Financeiro).</li>
                        <li><strong>Organização:</strong> Agrupa dispositivos por função, não por localização física.</li>
                        <li><strong>Performance:</strong> Reduz o tráfego de broadcast, melhorando o desempenho geral da rede.</li>
                    </ul>
                </li>
            </ul>
            <h4>Exemplo de Configuração Prática (Criação de VLANs)</h4>
            <pre><code>! Entra no modo de configuração global
Switch(config)#

! Cria a VLAN 10 e dá um nome a ela
Switch(config)# vlan 10
Switch(config-vlan)# name VENDAS

! Cria a VLAN 20 e dá um nome a ela
Switch(config)# vlan 20
Switch(config-vlan)# name TI

! Atribui a porta FastEthernet0/1 à VLAN 10
Switch(config)# interface FastEthernet0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10

! Atribui a porta FastEthernet0/2 à VLAN 20
Switch(config)# interface FastEthernet0/2
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 20</code></pre>
        `
    },
    'course_2_3': {
        title: '2.3: Trunking (802.1Q) e Roteamento Inter-VLAN',
        content: `
            <h3>O que são?</h3>
            <p><strong>Trunking:</strong> É um método que permite que o tráfego de múltiplas VLANs passe por um único link físico, geralmente entre dois switches ou entre um switch e um roteador.</p>
            <p><strong>Roteamento Inter-VLAN:</strong> É o processo que permite a comunicação entre diferentes VLANs, que por padrão são isoladas.</p>
            <h4>Analogia</h4>
            <ul>
                <li><strong>Trunking:</strong> Pense em um ônibus escolar que transporta crianças de várias turmas (VLANs). Cada criança usa um crachá com a cor da sua turma (a "tag" da VLAN). O ônibus (o link trunk) sabe exatamente em qual sala (VLAN de destino) deixar cada criança.</li>
                <li><strong>Roteamento Inter-VLAN:</strong> É o "inspetor" do corredor da escola (o roteador). Se um aluno da turma A (VLAN 10) precisa falar com um da turma B (VLAN 20), ele precisa pedir permissão ao inspetor, que o guiará até a outra sala.</li>
            </ul>
            <h4>Detalhes Técnicos</h4>
            <ul>
                <li><strong>Protocolo 802.1Q:</strong> É o padrão de mercado para trunking. Ele adiciona uma "tag" (etiqueta) de 4 bytes ao frame Ethernet, que contém o ID da VLAN.</li>
                <li><strong>Porta de Acesso (access):</strong> Pertence a uma única VLAN. Conecta dispositivos finais.</li>
                <li><strong>Porta Trunk (trunk):</strong> Transporta múltiplas VLANs. Conecta switches a switches ou switches a roteadores.</li>
                <li><strong>Router-on-a-Stick:</strong> É a técnica mais comum para roteamento Inter-VLAN. Consiste em criar subinterfaces lógicas em uma única interface física do roteador, uma para cada VLAN.</li>
            </ul>
            <h4>Exemplo de Configuração Prática (Trunk e Router-on-a-Stick)</h4>
            <pre><code>! No Switch, configurar a porta que conecta ao roteador como Trunk
Switch(config)# interface GigabitEthernet0/1
Switch(config-if)# switchport mode trunk

! No Roteador, criar subinterfaces para cada VLAN
Router(config)# interface GigabitEthernet0/0.10
! Subinterface para a VLAN 10
Router(config-subif)# encapsulation dot1q 10
! Informa que esta subinterface pertence à VLAN 10
Router(config-subif)# ip address 192.168.10.1 255.255.255.0
! Gateway da VLAN 10

Router(config)# interface GigabitEthernet0/0.20
! Subinterface para a VLAN 20
Router(config-subif)# encapsulation dot1q 20
Router(config-subif)# ip address 192.168.20.1 255.255.255.0
! Gateway da VLAN 20

! Ativar a interface física principal
Router(config)# interface GigabitEthernet0/0
Router(config-if)# no shutdown</code></pre>
        `
    },
    'course_2_4': {
        title: '2.4: Spanning Tree Protocol (STP)',
        content: `
            <h3>O que é?</h3>
            <p>O STP é um protocolo de Camada 2 que previne a ocorrência de loops de switching em redes com links redundantes (caminhos múltiplos).</p>
            <h4>Analogia</h4>
            <p>Imagine uma cidade com várias pontes conectando duas margens de um rio. Se não houver regras de trânsito, os carros podem ficar andando em círculos para sempre (o loop). O STP atua como um agente de trânsito que bloqueia temporariamente uma das pontes para garantir que haja apenas um caminho ativo por vez, evitando o caos. Se a ponte principal cair, ele libera a ponte bloqueada para manter a cidade conectada.</p>
            <h4>Detalhes Técnicos</h4>
            <ul>
                <li><strong>Loops de Switching:</strong> Ocorrem quando há mais de um caminho entre dois switches. Isso causa "Broadcast Storms" (tempestades de broadcast), onde frames de broadcast são reenviados infinitamente, consumindo toda a CPU dos switches e paralisando a rede.</li>
                <li><strong>Como o STP Funciona:</strong>
                    <ol>
                        <li><strong>Eleição do Root Bridge:</strong> Os switches trocam mensagens (BPDUs) para eleger um "switch raiz" (Root Bridge), que será o ponto de referência da rede.</li>
                        <li><strong>Definição de Portas:</strong> Cada switch determina o melhor caminho para o Root Bridge. As portas que fazem parte desse caminho são colocadas no estado de Encaminhamento (Forwarding).</li>
                        <li><strong>Bloqueio de Portas:</strong> As portas que criam caminhos redundantes (e poderiam causar loops) são colocadas no estado de Bloqueio (Blocking).</li>
                    </ol>
                </li>
                <li><strong>RSTP (Rapid Spanning Tree Protocol):</strong> Uma versão mais moderna e rápida do STP, que converge muito mais rápido (em segundos, em vez de até 50 segundos). É o padrão na maioria dos switches modernos.</li>
            </ul>
            <h4>Exemplo Prático</h4>
            <p>Em uma topologia com dois switches conectados por dois cabos, o STP irá eleger um Root Bridge e, em seguida, bloquear uma das portas em um dos switches para que apenas um dos cabos seja usado para encaminhar o tráfego, evitando o loop. Se o cabo ativo falhar, a porta bloqueada se tornará ativa.</p>
        `
    },
    // Módulo 3 do Curso
    'course_3_1': {
        title: '3.1: Endereçamento IPv4 e Sub-redes',
        content: `
            <h3>O que é?</h3>
            <p>O Endereçamento IPv4 é o sistema que dá um endereço lógico e único (como 192.168.1.10) a cada dispositivo em uma rede. As sub-redes são uma técnica para dividir uma grande rede IP em redes menores e mais gerenciáveis.</p>
            <h4>Analogia</h4>
            <p>Pense no endereço IP como o endereço completo de uma casa: <strong>Cidade X (Rede Principal)</strong>, <strong>Bairro Centro (Sub-rede)</strong>, <strong>Rua das Flores, 10 (Host)</strong>. A Máscara de Sub-rede é como o CEP, que diz ao carteiro qual parte do endereço é a cidade/bairro e qual é a casa.</p>
            <h4>Detalhes Técnicos</h4>
            <ul>
                <li><strong>Endereço IPv4:</strong> Um endereço de 32 bits, dividido em 4 octetos (ex: <code>192.168.1.1</code>).</li>
                <li><strong>Máscara de Sub-rede:</strong> Define qual parte do endereço IP é a rede e qual é o host. Ex: <code>255.255.255.0</code> (ou <code>/24</code>) significa que os 3 primeiros octetos são da rede.</li>
                <li><strong>Cálculo de Sub-redes (Subnetting):</strong> É o processo de "pegar emprestado" bits da porção de host para criar mais porções de rede (as sub-redes).</li>
                <li><strong>VLSM (Variable Length Subnet Mask):</strong> Permite criar sub-redes de tamanhos diferentes, evitando o desperdício de IPs.</li>
            </ul>
            <h4>Exemplo Prático (Cálculo de Sub-redes)</h4>
            <p><strong>Cenário:</strong> Você recebe a rede <code>192.168.10.0/24</code> e precisa criar 4 sub-redes.</p>
            <p><strong>Lógica:</strong> Para ter 4 sub-redes, você precisa de 2 bits "emprestados" da porção de host (porque 2² = 4). A nova máscara será <code>/26</code> (24 + 2).</p>
            <p>As 4 Sub-redes criadas serão:</p>
            <ul>
                <li><code>192.168.10.0/26</code></li>
                <li><code>192.168.10.64/26</code></li>
                <li><code>192.168.10.128/26</code></li>
                <li><code>192.168.10.192/26</code></li>
            </ul>
        `
    },
    'course_3_2': {
        title: '3.2: Roteamento Estático e Rota Padrão',
        content: `
            <h3>O que é?</h3>
            <p><strong>Roteamento Estático:</strong> É o processo de configurar manualmente as rotas em um roteador. O administrador informa: "Para chegar na rede X, envie os pacotes para o roteador Y".</p>
            <p><strong>Rota Padrão:</strong> É uma rota especial (<code>0.0.0.0/0</code>) que diz ao roteador para onde enviar todo o tráfego cujo destino ele não conhece. É o "caminho de último recurso", geralmente apontando para a Internet.</p>
            <h4>Analogia</h4>
            <ul>
                <li><strong>Rota Estática:</strong> Um guarda de trânsito te dá uma instrução específica: "Para ir ao Shopping, pegue a Avenida Principal."</li>
                <li><strong>Rota Padrão:</strong> Se você pergunta por um endereço que ele não conhece, ele te diz: "Não sei, mas pegue a rodovia principal (a Rota Padrão) que ela te leva para fora da cidade."</li>
            </ul>
            <h4>Detalhes Técnicos</h4>
            <ul>
                <li><strong>Vantagens do Roteamento Estático:</strong> Seguro, previsível e consome menos CPU.</li>
                <li><strong>Desvantagens:</strong> Não é escalável. Se uma rota cair, o administrador precisa intervir manualmente.</li>
            </ul>
            <h4>Exemplo de Configuração Prática (Cisco IOS)</h4>
            <pre><code>! Roteador R1

! Configura uma rota estática para a rede 10.20.30.0/24,
! informando que o próximo salto (next-hop) é o roteador com IP 192.168.1.2
R1(config)# ip route 10.20.30.0 255.255.255.0 192.168.1.2

! Configura uma rota padrão para todo o tráfego desconhecido,
! enviando-o para o roteador da operadora de internet com IP 200.100.50.1
R1(config)# ip route 0.0.0.0 0.0.0.0 200.100.50.1</code></pre>
        `
    },
    'course_3_3': {
        title: '3.3: Roteamento Dinâmico: Introdução ao OSPF',
        content: `
            <h3>O que é?</h3>
            <p>O Roteamento Dinâmico é um processo onde os roteadores "conversam" entre si para descobrir e compartilhar rotas automaticamente. O <strong>OSPF (Open Shortest Path First)</strong> é um dos protocolos mais populares para isso.</p>
            <h4>Analogia</h4>
            <p>Pense no Waze ou Google Maps. Em vez de seguir uma rota fixa (estática), o aplicativo analisa o trânsito em tempo real (as "conversas" entre roteadores) e te mostra o melhor caminho dinamicamente. Se uma rua fica congestionada (um link cai), ele recalcula a rota automaticamente.</p>
            <h4>Detalhes Técnicos</h4>
            <ul>
                <li><strong>Protocolo Link-State:</strong> Cada roteador informa a todos os outros sobre seus links diretos e o estado deles.</li>
                <li><strong>Adjacência de Vizinhos:</strong> Roteadores OSPF na mesma rede estabelecem uma relação de vizinhança para trocar informações.</li>
                <li><strong>Custo:</strong> O OSPF usa uma métrica chamada "custo" para determinar o melhor caminho. O custo é inversamente proporcional à largura de banda (links mais rápidos têm custo menor).</li>
                <li><strong>Áreas:</strong> Em redes grandes, o OSPF pode ser dividido em áreas para otimizar a troca de informações. A área principal é a Área 0 (backbone).</li>
            </ul>
            <h4>Exemplo de Configuração Prática (OSPF de Área Única)</h4>
            <pre><code>! Roteador R1

! Habilita o processo OSPF com um ID de processo (ex: 1)
R1(config)# router ospf 1

! Define um ID para o roteador (geralmente o IP de uma interface de loopback)
R1(config-router)# router-id 1.1.1.1

! Anuncia as redes que estão diretamente conectadas a este roteador
! A máscara wildcard é o inverso da máscara de sub-rede
R1(config-router)# network 192.168.1.0 0.0.0.255 area 0
R1(config-router)# network 10.0.0.0 0.0.0.3 area 0</code></pre>
        `
    },
    'course_3_4': {
        title: '3.4: Endereçamento IPv6',
        content: `
            <h3>O que é?</h3>
            <p>O IPv6 é a versão mais recente do Protocolo de Internet, criado para resolver o esgotamento dos endereços IPv4. Ele usa endereços de 128 bits, o que oferece um número praticamente infinito de endereços.</p>
            <h4>Analogia</h4>
            <p>Se o IPv4 é o número de placas de carro de uma cidade, que um dia se esgotam, o IPv6 é como adicionar muito mais letras e números às placas, permitindo que existam trilhões de combinações, resolvendo o problema para sempre.</p>
            <h4>Detalhes Técnicos</h4>
            <ul>
                <li><strong>Formato:</strong> 8 grupos de 4 dígitos hexadecimais, separados por dois pontos (ex: <code>2001:0DB8:85A3:0000:0000:8A2E:0370:7334</code>).</li>
                <li><strong>Regras de Abreviação:</strong>
                    <ul>
                        <li>Zeros à esquerda em cada grupo podem ser omitidos (<code>0DB8</code> vira <code>DB8</code>).</li>
                        <li>Um único bloco contínuo de zeros pode ser substituído por <code>::</code> (<code>...:0000:0000:...</code> vira <code>...::...</code>).</li>
                    </ul>
                </li>
                <li><strong>Tipos de Endereço:</strong>
                    <ul>
                        <li><strong>Global Unicast (GUA):</strong> Endereço público, roteável na Internet. Começa com <code>2</code> ou <code>3</code>.</li>
                        <li><strong>Link-Local (LLA):</strong> Usado apenas para comunicação na mesma rede local. Começa com <code>FE80::</code>.</li>
                    </ul>
                </li>
            </ul>
            <h4>Exemplo de Configuração Prática (Cisco IOS)</h4>
            <pre><code>! Habilita o roteamento IPv6 no roteador
Router(config)# ipv6 unicast-routing

! Configura um endereço IPv6 em uma interface
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ipv6 address 2001:DB8:ACAD:1::1/64
Router(config-if)# no shutdown</code></pre>
        `
    },
    // Módulo 5 do Curso
    'course_5_1': {
        title: '5.1: Arquitetura e Redundância (FHRP)',
        content: `
            <h3>O que é?</h3>
            <p>Esta aula aborda o design hierárquico de redes, um modelo para construir redes escaláveis, confiáveis e fáceis de gerenciar. Também introduz os FHRPs (First Hop Redundancy Protocols), que garantem que a rede continue funcionando mesmo se o gateway padrão falhar.</p>
            <h4>Analogia</h4>
            <ul>
                <li><strong>Design Hierárquico:</strong> Pense na organização de uma cidade. Você tem as ruas locais dos bairros (Camada de Acesso), as avenidas principais (Camada de Distribuição) e as super-rodovias que conectam a outras cidades (Camada de Core).</li>
                <li><strong>FHRP:</strong> Imagine que a saída do seu bairro tem duas pontes. O FHRP faz as duas pontes parecerem uma só. Se uma cair, o tráfego é desviado para a outra, sem que os motoristas percebam.</li>
            </ul>
            <h4>Detalhes Técnicos - Modelo Hierárquico de 3 Camadas</h4>
            <ul>
                <li><strong>Camada de Acesso (Access Layer):</strong> Onde os dispositivos finais se conectam à rede. Foco em segurança de porta, VLANs.</li>
                <li><strong>Camada de Distribuição (Distribution Layer):</strong> O ponto de agregação para a camada de acesso. Aplica políticas (ACLs, roteamento entre VLANs, QoS).</li>
                <li><strong>Camada de Core (Core Layer):</strong> O backbone da rede. Sua única função é encaminhar pacotes o mais rápido possível.</li>
            </ul>
            <h4>Detalhes Técnicos - FHRPs</h4>
            <p>Protocolos como <strong>HSRP (Hot Standby Router Protocol)</strong> e <strong>VRRP (Virtual Router Redundancy Protocol)</strong> permitem que dois ou mais roteadores compartilhem um endereço IP e MAC virtuais. Um roteador atua como ativo e o outro como standby. Se o ativo falhar, o standby assume instantaneamente.</p>
            <h4>Exemplo Prático</h4>
            <p>Em uma rede corporativa, switches de acesso se conectam a dois switches de distribuição rodando HSRP/VRRP para um gateway redundante. Ambos se conectam ao switch de core, que se conecta à Internet.</p>
        `
    },
    'course_5_2': {
        title: '5.2: Qualidade de Serviço (QoS)',
        content: `
            <h3>O que é?</h3>
            <p>QoS (Qualidade de Serviço) é um conjunto de técnicas para gerenciar recursos da rede e garantir que o tráfego mais importante (como voz e vídeo) tenha prioridade sobre o tráfego menos crítico (e-mails, downloads).</p>
            <h4>Analogia</h4>
            <p>Pense em uma rodovia com várias faixas. O QoS cria uma "faixa expressa" exclusiva para ambulâncias e viaturas (tráfego de voz/vídeo), garantindo que não fiquem presas no trânsito comum, mesmo em horários de pico.</p>
            <h4>Detalhes Técnicos</h4>
            <p>Aplicações em tempo real, como VoIP, são sensíveis a atraso (latência) e variação no atraso (jitter). O QoS garante que esses pacotes "passem na frente".</p>
            <h5>Como o QoS funciona:</h5>
            <ol>
                <li><strong>Classificação e Marcação:</strong> O tráfego é identificado (ex: pacotes de VoIP) e "marcado" com um valor de prioridade (usando campos como DSCP no cabeçalho IP).</li>
                <li><strong>Enfileiramento (Queuing):</strong> Quando há congestionamento, o roteador usa filas para organizar os pacotes. Pacotes de alta prioridade são colocados em filas preferenciais e enviados primeiro.</li>
                <li><strong>Policiamento e Modelagem (Policing and Shaping):</strong> Técnicas para limitar a taxa de tráfego, evitando que uma aplicação consuma toda a banda.</li>
            </ol>
            <h4>Exemplo Prático</h4>
            <p>Em um escritório, o QoS é configurado para marcar o tráfego de telefonia IP com a prioridade mais alta. Assim, mesmo com downloads pesados, a qualidade das chamadas de voz não é afetada.</p>
        `
    },
    'course_5_3': {
        title: '5.3: Virtualização e Automação (SDN, APIs)',
        content: `
            <h3>O que é?</h3>
            <p>Esta aula introduz as tecnologias que estão revolucionando o gerenciamento de redes.</p>
            <ul>
                <li><strong>Virtualização de Rede:</strong> Criar redes virtuais que rodam sobre uma infraestrutura física compartilhada.</li>
                <li><strong>Automação de Rede:</strong> Usar scripts e softwares para configurar, gerenciar e monitorar dispositivos automaticamente.</li>
                <li><strong>SDN (Software-Defined Networking):</strong> Uma arquitetura que separa o "cérebro" da rede (Plano de Controle) do "corpo" (Plano de Dados). Uma controladora central gerencia a rede de forma holística.</li>
            </ul>
            <h4>Analogia</h4>
            <p><strong>Rede Tradicional:</strong> Cada guarda de trânsito decide com base no que vê ao seu redor. <br/><strong>Rede SDN:</strong> Uma central de controle com câmeras por toda a cidade analisa o fluxo geral e envia instruções para cada guarda otimizar o trânsito da cidade inteira.</p>
            <h4>Detalhes Técnicos</h4>
            <ul>
                <li><strong>APIs (Application Programming Interfaces):</strong> São as "linguagens" que os softwares usam para conversar. APIs como REST permitem que scripts e controladoras SDN configurem roteadores e switches.</li>
                <li><strong>Ferramentas de Automação:</strong>
                    <ul>
                        <li><strong>Ansible:</strong> Usa "playbooks" (arquivos de receita em YAML) para configurar múltiplos dispositivos de uma vez.</li>
                        <li><strong>Python:</strong> Linguagem popular para automação com bibliotecas como Netmiko e Paramiko.</li>
                    </ul>
                </li>
            </ul>
            <h4>Exemplo Prático</h4>
            <p>Em vez de um analista se conectar a 50 switches para atualizar uma VLAN, ele roda um playbook do Ansible que faz a alteração em todos os 50 switches automaticamente em segundos.</p>
        `
    },
    'course_5_4': {
        title: '5.4: Preparação para o Exame',
        content: `
            <h3>O que é?</h3>
            <p>A etapa final, onde todo o conhecimento adquirido é testado e consolidado. O objetivo é se familiarizar com o estilo e a dificuldade das questões do exame CCNA e identificar pontos fracos para revisão.</p>
            <h4>Analogia</h4>
            <p>É o "simulado da autoescola" antes da prova de direção final. Você passa por todas as manobras em um ambiente controlado para ganhar confiança e corrigir erros antes do exame real.</p>
            <h4>Detalhes Técnicos</h4>
            <ul>
                <li><strong>Domínios do Exame:</strong> O exame CCNA 200-301 é dividido em domínios com pesos diferentes. É importante focar nos que têm maior peso.</li>
                <li><strong>Tipos de Questão:</strong> O exame pode ter questões de múltipla escolha, arrastar e soltar (drag-and-drop) e laboratórios de simulação (simlets).</li>
                <li><strong>Gerenciamento de Tempo:</strong> É crucial praticar com simulados cronometrados para aprender a gerenciar o tempo durante a prova.</li>
            </ul>
            <h4>Exemplo Prático</h4>
            <p>Usar plataformas de simulados como Boson ExSim ou da própria Cisco Networking Academy para fazer provas completas, revisar cada resposta e focar os estudos finais nas áreas com menor pontuação.</p>
        `
    }
};