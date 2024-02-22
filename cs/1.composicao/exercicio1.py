class Ventilador:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__tensao = tensao
        self.__ligado = False

    def cor(self):
        return self.__cor


class Pessoa:
    def __init__(self, nome, saldo_da_conta):
        self.nome = nome
        self.saldo_da_conta = saldo_da_conta
        self.ventilador = None

    def compra_ventilador(self, ventilador):
        if ventilador.preco <= self.saldo_da_conta:
            self.saldo_da_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self):
        if (self.ventilador):
            return f"{self.nome} -  possui ventilador."
        return f"{self.nome} - não possui um ventilador."
    
  
ventilador_branco = Ventilador("branco", potencia=200, tensao=220, preco=100)
pessoa = Pessoa("Maria", saldo_da_conta=2000)
pessoa.compra_ventilador(ventilador_branco)

print(pessoa)
