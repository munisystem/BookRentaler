require "pasori"
require "net/http"
require "uri"

pasori = Pasori.open

def hex_dump(ary)
  ary.unpack("C*").map{|c| sprintf("%02X", c)}.join
end

def http_put(url)
  uri = URI.parse(url)
  req = Net::HTTP.start(uri.host, 3000) do |http|
    request = Net::HTTP::Put.new(uri.path)
    request.set_content_type("text/html")
    response = http.request(request)
  end
end

begin
  begin
    idcard = pasori.felica_polling(-512)
    studentid = idcard.read(idcard.service[1], 0)
    if /[0-9]{2}[A-Z]{2}[0-9]{3}/ =~ studentid then
      sleep 5
      felica = pasori.felica_polling(Felica::POLLING_ANY)
      bookid = hex_dump(felica.idm)
      http_put("http://api.munisystem.net/books/#{bookid}/#{studentid[2..8]}")
      felica.close
    end
    sleep 5
  rescue => ee
    sleep 1
  end while true
rescue Interrupt
  pasori.close
  exit 1
end
