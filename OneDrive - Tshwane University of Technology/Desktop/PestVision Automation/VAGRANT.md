# PestVision Development Environment

This repository includes a Vagrant configuration for setting up a complete development environment for PestVision.

## Prerequisites

1. Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
2. Install [Vagrant](https://www.vagrantup.com/downloads)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Lintshiwe/PestVisionAI2.1.git
cd PestVisionAI2.1
```

2. Start the Vagrant environment:
```bash
vagrant up
```

3. SSH into the virtual machine:
```bash
vagrant ssh
```

4. Start all services:
```bash
./start_services.sh
```

## Available Services

- Java Backend: http://localhost:8080
- Vision Service: http://localhost:8000

## Development Workflow

The project directories are synced with the virtual machine:
- Vision Service: `/home/vagrant/vision_service`
- Java Backend: `/home/vagrant/pest-backend`

Any changes you make on your host machine will be automatically reflected in the VM.

## Useful Vagrant Commands

- `vagrant up` - Start the VM
- `vagrant halt` - Stop the VM
- `vagrant destroy` - Remove the VM
- `vagrant ssh` - Connect to the VM
- `vagrant reload` - Restart the VM and reload the Vagrantfile

## Environment Details

- Ubuntu 20.04 LTS
- Python 3.8+ with venv
- OpenJDK 17
- Maven
- Docker & Docker Compose

## Troubleshooting

If services don't start:
1. Check logs in respective directories
2. Ensure ports 8000 and 8080 are not in use on your host machine
3. Try restarting the VM with `vagrant reload`