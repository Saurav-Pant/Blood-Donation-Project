provider "aws" {
  region = "ap-south-1"
}

resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  
  tags = {
    Name = "blood-donation-vpc"
  }
}

resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "blood-donation-igw"
  }
}

resource "aws_subnet" "main" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"
  availability_zone = "ap-south-1a"  

  tags = {
    Name = "blood-donation-subnet"
  }
}

resource "aws_route_table" "main" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }

  tags = {
    Name = "blood-donation-route-table"
  }
}

resource "aws_route_table_association" "main" {
  subnet_id      = aws_subnet.main.id
  route_table_id = aws_route_table.main.id
}

resource "aws_security_group" "allow_web" {
  name        = "allow_web_traffic"
  description = "Allow inbound web traffic"
  vpc_id      = aws_vpc.main.id

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTPS"  
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Next.js"
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "allow_web"
  }
}

resource "aws_instance" "Blood-Donation-Project" {
  ami           = ""  
  instance_type = "t2.large"
  key_name      = "new-Blood-Donation"

  vpc_security_group_ids = [aws_security_group.allow_web.id]
  subnet_id              = aws_subnet.main.id

  associate_public_ip_address = true

  user_data = <<-EOF
              #!/bin/bash
              set -e
              
              # Update and install dependencies
              sudo apt update
              sudo apt install -y nodejs npm
              
              # Install PM2
              sudo npm install -g pm2
              
              # Set up the application
              sudo mkdir -p /var/www/nextjs
              cd /var/www/nextjs
              sudo git clone https://github.com/Saurav-Pant/Blood-Donation-Project.git .
              sudo npm install
                            
              # Configure firewall
              sudo ufw allow 22/tcp
              sudo ufw allow 80/tcp
              sudo ufw allow 443/tcp
              sudo ufw allow 3000/tcp  
              sudo ufw --force enable

              # Start the application with PM2 in development mode
              sudo pm2 start npm --name "Blood-Donation-Project" -- run dev

              echo "Setup completed successfully"
              EOF

  tags = {
    Name = "blood-donation-server"
  }
}

output "public_ip" {
  value = aws_instance.Blood-Donation-Project.public_ip
}


# provider "aws" {
#   region = "ap-south-1"
# }

# resource "aws_vpc" "main" {
#   cidr_block = "10.0.0.0/16"
  
#   tags = {
#     Name = "blood-donation-vpc"
#   }
# }

# resource "aws_internet_gateway" "main" {
#   vpc_id = aws_vpc.main.id

#   tags = {
#     Name = "blood-donation-igw"
#   }
# }

# resource "aws_subnet" "public" {
#   vpc_id     = aws_vpc.main.id
#   cidr_block = "10.0.1.0/24"
#   availability_zone = "ap-south-1a"
#   map_public_ip_on_launch = true

#   tags = {
#     Name = "blood-donation-public-subnet"
#   }
# }

# resource "aws_subnet" "private" {
#   vpc_id     = aws_vpc.main.id
#   cidr_block = "10.0.2.0/24"
#   availability_zone = "ap-south-1a"
#   map_public_ip_on_launch = false

#   tags = {
#     Name = "blood-donation-private-subnet"
#   }
# }

# resource "aws_eip" "nat_eip" {
#   domain = "vpc"
#   depends_on = [aws_internet_gateway.main]
# }

# resource "aws_nat_gateway" "main" {
#   allocation_id = aws_eip.nat_eip.id
#   subnet_id     = aws_subnet.public.id

#   tags = {
#     Name = "blood-donation-nat-gateway"
#   }
# }

# resource "aws_route_table" "public" {
#   vpc_id = aws_vpc.main.id

#   route {
#     cidr_block = "0.0.0.0/0"
#     gateway_id = aws_internet_gateway.main.id
#   }

#   tags = {
#     Name = "blood-donation-public-route-table"
#   }
# }

# resource "aws_route_table" "private" {
#   vpc_id = aws_vpc.main.id

#   route {
#     cidr_block = "0.0.0.0/0"
#     nat_gateway_id = aws_nat_gateway.main.id
#   }

#   tags = {
#     Name = "blood-donation-private-route-table"
#   }
# }

# resource "aws_route_table_association" "public" {
#   subnet_id      = aws_subnet.public.id
#   route_table_id = aws_route_table.public.id
# }

# resource "aws_route_table_association" "private" {
#   subnet_id      = aws_subnet.private.id
#   route_table_id = aws_route_table.private.id
# }

# resource "aws_security_group" "allow_web" {
#   name        = "allow_web_traffic"
#   description = "Allow inbound web traffic"
#   vpc_id      = aws_vpc.main.id

#   ingress {
#     description = "HTTP"
#     from_port   = 80
#     to_port     = 80
#     protocol    = "tcp"
#     cidr_blocks = ["0.0.0.0/0"]
#   }

#   ingress {
#     description = "HTTPS"  
#     from_port   = 443
#     to_port     = 443
#     protocol    = "tcp"
#     cidr_blocks = ["0.0.0.0/0"]
#   }

#   ingress {
#     description = "Next.js"
#     from_port   = 3000
#     to_port     = 3000
#     protocol    = "tcp"
#     cidr_blocks = ["0.0.0.0/0"]
#   }

#   egress {
#     from_port   = 0
#     to_port     = 0
#     protocol    = "-1"
#     cidr_blocks = ["0.0.0.0/0"]
#   }

#   tags = {
#     Name = "allow_web"
#   }
# }

# resource "aws_security_group" "allow_ssh" {
#   name        = "allow_ssh"
#   description = "Allow SSH inbound traffic"
#   vpc_id      = aws_vpc.main.id

#   ingress {
#     description = "SSH"
#     from_port   = 22
#     to_port     = 22
#     protocol    = "tcp"
#     cidr_blocks = ["/32"]  
#   }

#   egress {
#     from_port   = 0
#     to_port     = 0
#     protocol    = "-1"
#     cidr_blocks = ["0.0.0.0/0"]
#   }

#   tags = {
#     Name = "allow_ssh"
#   }
# }

# resource "aws_instance" "Blood-Donation-Project" {
#   ami           = ""  
#   instance_type = "t2.large"
#   key_name      = "new-Blood-Donation"

#   vpc_security_group_ids = [aws_security_group.allow_web.id, aws_security_group.allow_ssh.id]
#   subnet_id              = aws_subnet.private.id

#   user_data = <<-EOF
#               #!/bin/bash
#               set -e
              
#               # Update and install dependencies
#               sudo apt update
#               sudo apt install -y nodejs npm nginx

#               # Install PM2
#               sudo npm install -g pm2
              
#               # Set up the application
#               sudo mkdir -p /var/www/nextjs
#               cd /var/www/nextjs
#               sudo git clone https://github.com/Saurav-Pant/Blood-Donation-Project.git .
#               sudo npm install
              
#               # Change ownership of the application directory
#               sudo chown -R ubuntu:ubuntu /var/www/nextjs/

#               # Adjust permissions
#               sudo chmod -R 755 /var/www/nextjs/
              
#               # Configure Nginx
#               sudo tee /etc/nginx/sites-available/default > /dev/null <<EOT
#               server {
#                   listen 80;
#                   server_name _;

#                   location / {
#                       proxy_pass http://localhost:3000;
#                       proxy_http_version 1.1;
#                       proxy_set_header Upgrade \$http_upgrade;
#                       proxy_set_header Connection 'upgrade';
#                       proxy_set_header Host \$host;
#                       proxy_cache_bypass \$http_upgrade;
#                   }
#               }
#               EOT

#               # Restart Nginx
#               sudo systemctl restart nginx

#               # Start the application with PM2 in development mode
#               sudo -u ubuntu pm2 start npm --name "Blood-Donation-Project" -- run dev

#               echo "Setup completed successfully"
#               EOF


#   tags = {
#     Name = "blood-donation-server"
#   }
# }

# output "nat_gateway_ip" {
#   value = aws_eip.nat_eip.public_ip
# }