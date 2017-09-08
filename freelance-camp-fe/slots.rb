# each user starts with 100 the wallet is able to go between the the two apps as well as aggregate wins and losses.

# 3 in a row
#   -diagnol later

# paytable

#   triple 7 is 3x
#   any other is 2x
@bet = 10

def win amount_won
  @user_wallet += amount_won
  puts "Your new balance is: #{@user_wallet}."
  puts "Do you want to play again? Y/N"
  user_input = gets.chomp.upcase
  if user_input == "Y"
    restart
  else
    puts "We'll get you next time!"
  end
end
win

def three_in_a_row
  wheel_1 = rand(1..9)
  wheel_2 = rand(wheel_1..9)
  wheel_3 = rand(wheel_2..9)

  puts "    | #{wheel_1} | #{wheel_2} | #{wheel_3} |"

  if (wheel_1 == wheel_2) && (wheel_2 == wheel_3)
    p "3 in a ROW!"
    if wheel_1 == 7
      p "TRIPLE 777 Jackpot!!!"
      
      win(@bet * 5)
    else
      
      win(@bet * 2)
    end
  else
    p "You lost"
    lost(@bet)
  end
end

three_in_a_row

# if (wheel_1 == wheel_2) && ((wheel_2 == wheel_3) || (wheel_3 == wheel_1))