import java.util.*;
public class Amazon
{
	public static void main(String[] args) 
	{
		String str = "/home/"
		;
		Stack<String> s = new Stack<String>();
		String[]  dir = str.split("/");
		
		// String[] arr = new String[dir.length];
		System.out.println(Arrays.toString(dir));
				for(int i=1 ;i<dir.length;i++)
				{
					String find = dir[i];
					
					if(find.equals("."))
					{
						continue;
					}
					else if(find.equals(".."))
					{
						s.pop();
					}
					else
					{
						find = "/"+find;
						s.push(find);
					}
					
				}
		String Str = "";
		while(!s.isEmpty()){
		    Str+=s.pop();
		}
		System.out.print(Str);

	}
		

}

