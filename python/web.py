# Instale o pacote selenium via pip
# pip install selenium

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
# Configure o caminho para o seu driver de navegador
# Por exemplo, para o Chrome:
# driver = webdriver.Chrome(executable_path='/path/to/chromedriver')
# Para o Firefox:
# driver = webdriver.Firefox(executable_path='/path/to/geckodriver')

service =Service(exexecutable_path='chrome.exe')
driver = webdriver.Chrome(service=service)
# Insira o URL de login do site
login_url = 'https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?response_type=code&client_id=pje-tjba-1g&redirect_uri=https%3A%2F%2Fpje.tjba.jus.br%2Fpje%2FauthenticateSSO.seam&state=d1214aef-5888-4516-a16a-aa1213e56e94&login=true&scope=openid'
# Abrir a página de login
driver.get(login_url)

time.sleep(3)
username = driver.find_element(By.CLASS_NAME,'form-control')
password = driver.find_element(By.ID, 'password')
login_button = driver.find_element(By.ID, 'kc-login')
username.send_keys('seu_usuario')
password.send_keys('sua_senha')
login_button.click()
driver.quit()

