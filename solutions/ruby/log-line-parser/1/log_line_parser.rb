class LogLineParser
  def initialize(line)
    @line = line
  end

  def message
     return @line[@line.index(':') + 1, @line.size].strip()
  end
  
  def log_level 
     return @line[1, @line.index(']') - 1].downcase()
  end

  def reformat
      level = "(#{self.log_level})"
      return self.message.concat(' ', level)
  end
end
